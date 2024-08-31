import React, { useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import {
  AdminEmail,
  AdminPassword,
  AdminToken,
  getItem,
  IsAdmin,
} from "../utils/localStorage";
import Home from "../Components/Home";

function Papers() {
  const [sem, setSem] = useState(1);
  const [deleteId, setDeleteId] = useState(1);
  const [updateId, setUpdateId] = useState(1);
  const [papers, setPapers] = useState([]);
  const email = getItem(AdminEmail);
  const password = getItem(AdminPassword);
  const token = getItem(AdminToken);

  async function GetPapers(e) {
    e.preventDefault();
    try {
      const result = await axiosClient.post(`/sem${sem}admin/papers`, {
        adminEmail: email,
        adminPassword: password,
        token,
      });
      setPapers(result.result || []);
        // console.log(result.result);
    } catch (err) {}
  }
  async function UpdatePaper(e) {
    e.preventDefault();
    try {
    //   console.log(updateId);

      const result = await axiosClient.put(`/sem${sem}admin/papers`, {
        adminEmail: email,
        adminPassword: password,
        token,
        id: updateId,
      });
      //   setNotes(result.result || []);
      //   console.log(result.result);
    } catch (err) {}
  }
  async function DeletePaper(e) {
    e.preventDefault();
    try {
      const result = await axiosClient.delete(`/sem${sem}admin/papers`, {
        data: {
          adminEmail: email,
          adminPassword: password,
          token,
          id: deleteId,
        },
      });
    } catch (err) {}
  }
  const IsAdminVipin = getItem(IsAdmin);

  if (!IsAdminVipin) {
    return <Home />;
  }
  return (
    <div className="flex mt-5  flex-wrap gap-6 mx-auto  justify-evenly items-center mb-10  px-4">
      <div className="flex flex-wrap gap-3 text-lg border border-green-500 p-2 rounded-md justify-center items-center ">
        <input
          type="text"
          onChange={e => {
            setSem(Number(e.target.value));
          }}
          placeholder="Sem"
          className=" rounded-md p-2 text-black"
        />
        <button
          className="bg-green-400 px-2 py-1 rounded hover:bg-green-600 transition-all duration-300  "
          onClick={GetPapers}
        >
          Get
        </button>
      </div>
      <div className="flex flex-wrap gap-3 border border-yellow-500 p-2 rounded-md justify-center items-center ">
        <input
          type="text"
          onChange={e => {
            setUpdateId(e.target.value);
          }}
          placeholder="Notes Id"
          className=" rounded-md p-2 text-black"
        />
        <button
          className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-600 transition-all duration-300  "
          onClick={UpdatePaper}
        >
          Update
        </button>
      </div>
      <div className="flex flex-wrap gap-3 border border-red-500 p-2 rounded-md justify-center items-center ">
        <input
          type="text"
          onChange={e => {
            setDeleteId(e.target.value);
          }}
          placeholder="Notes Id "
          className=" rounded-md p-2 text-black"
        />
        <button
          className="bg-red-400 px-2 py-1 rounded hover:bg-red-600 transition-all duration-300  "
          onClick={DeletePaper}
        >
          Delete
        </button>
      </div>
      <hr className=" w-[80%] bg-slate-500 h-1 mx-auto mb-10 rounded-md" />
      <div className="flex gap-8 flex-wrap h-min-[100vh] pb-16 mx-auto px-6 justify-center items-center">
        {papers?.map(paper => {
          return (
            <div
              key={paper._id}
              className=" bg-gray-800 flex gap-3  flex-col rounded-lg   shadow-md shadow-green-400   text-white p-4"
            >
              <h1 className=" text-xl">{paper?.subject_name}</h1>
              <h1>{paper?.studentEmail}</h1>
              <h1>{paper?._id}</h1>
              <a
                href={paper?.T1}
                target="_blank"
                className="bg-red-500 px-2 py-1 rounded-md hover:scale-110 transition-all duration-500"
              >
                T1
              </a>
              <a
                href={paper?.T2}
                target="_blank"
                className="bg-red-500 px-2 py-1 rounded-md hover:scale-110 transition-all duration-500"
              >
                T2
              </a>
              <a
                href={paper?.T3}
                target="_blank"
                className="bg-red-500 px-2 py-1 rounded-md hover:scale-110 transition-all duration-500"
              >
                T3
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Papers;
