import React, { useEffect, useState } from "react";

const AddTodo = ({ dataHandler }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dataHandler(input);
    setInput({ name: "", email: "", password: "" });
  };

  return (
    <section className="p-5 max-w-xl mx-auto">
      <form onSubmit={submitHandler} className="space-y-5">
        <div className="flex flex-col md:flex-row items-center">
          <label className="md:w-24 mb-2 md:mb-0">Name:</label>
          <input
            type="text"
            className="w-full md:flex-1 text-center border border-gray-300 rounded-lg py-2"
            value={input.name}
            name="name"
            onChange={changeEventHandler}
            required
          />
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <label className="md:w-24 mb-2 md:mb-0">Email:</label>
          <input
            type="email"
            className="w-full md:flex-1 text-center border border-gray-300 rounded-lg py-2"
            value={input.email}
            name="email"
            onChange={changeEventHandler}
            required
          />
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <label className="md:w-24 mb-2 md:mb-0">Password:</label>
          <input
            type="password"
            className="w-full md:flex-1 text-center border border-gray-300 rounded-lg py-2"
            value={input.password}
            name="password"
            onChange={changeEventHandler}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-500 transition"
        >
          Add Todo
        </button>
      </form>
    </section>
  );
};

export default AddTodo;
