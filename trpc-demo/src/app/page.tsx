"use client";

import { trpc } from "@/utils/trpc";
import { useState } from "react";

export default function Home() {
  const hello = trpc.post.hello.useQuery();
  const [title, setTitle] = useState("");
  const addPost = trpc.post.addPost.useMutation();

  const handleAddPost = async () => {
    const newPost = await addPost.mutateAsync({ title });
    console.log("New Post:", newPost);
    setTitle("");
  };

  return (
    <div>
      <h2>{hello.data}</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />

      <button onClick={handleAddPost}>add</button>
    </div>
  );
}
