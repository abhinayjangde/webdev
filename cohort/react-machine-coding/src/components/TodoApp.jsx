import { useState } from "react";

export default function TodoApp() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (!input.trim()) return;
    const item = {
      id: todoList.length + 1,
      text: input.trim(),
      completed: false,
    };
    setTodoList((prev) => [...prev, item]);
    setInput("");
  };

  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return {...t};
        }
      })
    );
  };


  const handleDelete = (id)=>{
    setTodoList(todoList.filter(todo=> todo.id !== id))
  }
  return (
    <div className="my-20">
      <div className="flex gap-4 justify-center my-5">
        <input
          className="border"
          type="text"
          value={input}
          placeholder="Enter todo"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="border"
          onClick={() => handleAddTodo()}
          type="submit"
        >
          Add
        </button>
      </div>
      <ul>
        {todoList.map((t) => {
          return (
            <li className="flex gap-4 justify-center" key={t.id}>
              <input
                onChange={() => toggleCompleted(t.id)}
                type="checkbox"
                checked={t.completed}
              />
              <span className={t.completed ? "line-through" : ""} >{t.text}</span>
              <button onClick={()=>handleDelete(t.id)} className="border">Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
