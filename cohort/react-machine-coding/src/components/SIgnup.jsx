import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Signup() {
  const [response, setResponse] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const res = fetch("http://localhost:8080/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = (await res).json();

    setResponse(resData);
  };
  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <label htmlFor="name">Name</label>
          <input
            className="border px-2 mx-1"
            {...register("name", { required: true })}
            type="text"
          />

          {errors.name && (
            <span className={errors.name ? "text-red-500" : ""}>
              This field is required
            </span>
          )}
        </div>
        <div className="my-2">
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            type="email"
            className="border px-2 mx-1"
          />
        </div>
        <div className="my-2">
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            type="text"
            className="border px-2 mx-1"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="border bg-blue-400"
        >
          {isSubmitting ? "Submitting" : "Register"}
        </button>
      </form>
    </div>
  );
}
