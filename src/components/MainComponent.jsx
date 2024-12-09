import React, { useState } from "react";
import Heading from "./Heading";
import AddTodo from "./AddTodo";

const MainComponent = () => {
  const [data, setData] = useState([]);

  const dataHandler = (input) => {
    setData([...data, input]);
  };

  const deleteHandle = (index) => {
    setData(data.filter((_, idx) => idx !== index));
  };

  return (
    <>
      <main className="flex flex-col justify-center items-center px-4">
        <Heading />
        <AddTodo dataHandler={dataHandler} />

        <div className="p-4 w-full max-w-4xl">
          {data.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">Password</th>
                    <th className="px-4 py-2 border">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((input, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border">{input.name}</td>
                      <td className="px-4 py-2 border">{input.email}</td>
                      <td className="px-4 py-2 border">{input.password}</td>
                      <td className="px-4 py-2 border text-center">
                        <button
                          onClick={() => deleteHandle(index)}
                          className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-500 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h1 className="text-center text-gray-500 mt-4">
              No data available
            </h1>
          )}
        </div>
      </main>
    </>
  );
};

export default MainComponent;
