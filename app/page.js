"use client";
import React, { useState } from 'react';

const Page = () => {
  const [Title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [Ldata, setLdata] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setLdata([...Ldata, { Title, desc }]);
    setTitle("");
    setDesc("");
  };

  const removeTask = (i) => {
    const copyArr = [...Ldata];
    copyArr.splice(i, 1);
    setLdata(copyArr);
  };

  let renderData = <h2>No Task Found!</h2>;
  if (Ldata.length > 0) {
    renderData = Ldata.map((d, i) => (
      <div key={i}>
        <div className="flex justify-between">
          <h4>{d.Title}</h4>
          <h4>{d.desc}</h4>
          <button
            onClick={() => removeTask(i)}
            className="bg-red-600 text-white px-3 py-3 rounded-xl"
          >
            Delete
          </button>
        </div>
      </div>
    ));
  }

  return (
    <>
      <div className='w-full h-full flex justify-center items-center flex-col gap-5 bg-gradient-to-r from-indigo-500 to-purple-500 p-4 sm:p-10'>
        <div>
          <h1 className='text-white text-3xl sm:text-5xl text-center'>
            Pixel Planner
          </h1>
        </div>
        <div className='flex justify-center items-center flex-col bg-white p-4 sm:p-10 gap-5 sm:gap-10 bg-opacity-15 backdrop-blur-lg rounded-2xl w-full max-w-lg'>
          <form onSubmit={submitHandler} className="w-full">
            <input
              type="text"
              placeholder="Title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-300 p-2 rounded-lg mb-4 w-full"
            />
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Description"
              className="border-2 border-gray-300 p-2 rounded-lg mb-4 w-full"
            />
            <div className="flex justify-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Add Task
              </button>
            </div>
          </form>
          <hr className="w-full"/>
          <div className='output p-4 bg-gray-100 rounded-lg shadow-md w-full space-y-4 max-h-48 overflow-y-auto'>
            {renderData}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;