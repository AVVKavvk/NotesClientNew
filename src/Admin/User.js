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

function User() {
  const [number, setNumber] = useState(5);
  const [name, setName] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [users, setUsers] = useState([]);
  const email = getItem(AdminEmail);
  const password = getItem(AdminPassword);
  const token = getItem(AdminToken);

  async function GetUsers(e) {
    e.preventDefault();
    try {
      const result = await axiosClient.post("/admin/users", {
        adminEmail: email,
        adminPassword: password,
        token,
        number,
      });

      setUsers(result.result || []);
      // console.log(result.result);
    } catch (err) {
      console.error(err);
    }
  }
  async function GetUsersByName(e) {
    e.preventDefault();
    try {
      const result = await axiosClient.post("/admin/users/name", {
        adminEmail: email,
        adminPassword: password,
        token,
        name,
      });

      setUsers(result.result || []);
      // console.log(result.result);
    } catch (err) {
      console.error(err);
    }
  }
  async function updateNameByEmail(e) {
    e.preventDefault();
    try {
      const result = await axiosClient.put("/admin/users/name", {
        adminEmail: email,
        adminPassword: password,
        token,
        email: updateEmail,
        name: updateName,
      });
    } catch (err) {
      console.error(err);
    }
  }
  const IsAdminVipin = getItem(IsAdmin);

  if (!IsAdminVipin) {
    return <Home />;
  }
  return (
    <div>
      <div className="flex flex-wrap mx-auto  justify-center items-center">
        <div className=" flex w-[250px] gap-5  rounded-md text-black  mx-auto p-2 mb-9  justify-center items-center ">
          <input
            type="text"
            onChange={e => {
              setNumber(Number(e.target.value));
            }}
            placeholder="Enter No of students"
            className=" rounded-md p-2"
          />
          <button
            className=" bg-green-600 px-3 py-2 hover:bg-green-700 transition-all duration-300 rounded-md "
            onClick={GetUsers}
          >
            Submit
          </button>
        </div>

        <div className=" flex w-[250px] gap-5  rounded-md text-black  mx-auto p-2 mb-9  justify-center items-center ">
          <input
            type="text"
            onChange={e => {
              setName(e.target.value);
            }}
            placeholder="Name of user"
            className=" rounded-md p-2"
          />
          <button
            className=" bg-green-600 px-3 py-2 hover:bg-green-700 transition-all duration-300 rounded-md "
            onClick={GetUsersByName}
          >
            Submit
          </button>
        </div>
      </div>
      <div className=" max-w-[800px] p-3 mx-auto mb-10 justify-center text-black border border-red-600 rounded-md gap-6 flex flex-wrap    ">
        <input
          type="text"
          onChange={e => {
            setUpdateName(e.target.value);
          }}
          placeholder="Update Name"
          className=" rounded-md p-2"
        />
        <input
          type="text"
          onChange={e => {
            setUpdateEmail(e.target.value);
          }}
          placeholder="Email"
          className=" rounded-md p-2"
        />
        <button
          className=" bg-red-600 px-3 py-2 hover:bg-red-700 transition-all duration-300 rounded-md "
          onClick={updateNameByEmail}
        >
          Submit
        </button>
      </div>
      <hr className=" w-[80%] bg-slate-500 h-1 mx-auto mb-10 rounded-md" />
      <div className="flex gap-8 flex-wrap h-min-[100vh] pb-16 mx-auto px-6 justify-center items-center">
        {users?.map(user => {
          return (
            <div
              key={user._id}
              className=" bg-gray-800 rounded-lg   shadow-md shadow-green-400 hover:scale-110 transition-all duration-500 text-white p-4"
            >
              <h1 className=" text-xl">{user?.name}</h1>
              <h1>{user?.email}</h1>
              <h1>{user?.phNumber}</h1>
              <h1>{user?._id}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default User;
