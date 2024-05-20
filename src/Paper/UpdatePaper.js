import React, { useState } from "react";
import { axiosClient } from "../utils/axiosClient";
const UpdateLab = () => {
  const [sem, setSem] = useState("");
  const [email, setEmail] = useState("");
  const [linkT1, setLinkT1] = useState("");
  const [linkT2, setLinkT2] = useState("");
  const [linkT3, setLinkT3] = useState("");

  const handleSemChange = e => {
    setSem(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleLinkChangeT1 = e => {
    setLinkT1(e.target.value);
  };
  const handleLinkChangeT2 = e => {
    setLinkT2(e.target.value);
  };
  const handleLinkChangeT3 = e => {
    setLinkT3(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axiosClient.post(`sem${sem}/update/paper`, {
        studentEmail: email,
        T1: linkT1,
        T2: linkT2,
        T3: linkT3,
      });

      // console.log(response.data);
      alert(
        "Data sent successfully \nIt will take time to update on VipinNotes \nThanks for Support"
      );
    } catch (error) {
      // console.error("There was an error sending the data!", error);
      alert("Failed to send data");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-400 p-6  text-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="sem"
          >
            Semester
          </label>
          <select
            id="sem"
            value={sem}
            onChange={handleSemChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>
              select Sem
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="link"
          >
            Drive Link For T1
          </label>
          <input
            type="url"
            id="Drive link"
            value={linkT1}
            onChange={handleLinkChangeT1}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="link"
          >
            Drive Link For T2
          </label>
          <input
            type="url"
            id="Drive link"
            value={linkT2}
            onChange={handleLinkChangeT2}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="link"
          >
            Drive Link For Endsem
          </label>
          <input
            type="url"
            id="Drive link"
            value={linkT3}
            onChange={handleLinkChangeT3}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateLab;
