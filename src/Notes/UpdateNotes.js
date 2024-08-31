import React, { useState } from "react";
import { axiosClient } from "../utils/axiosClient";
const UpdateNotes = () => {
  const [sem, setSem] = useState("");
  const [email, setEmail] = useState("");
  const [pdfUrl, setpdfUrl] = useState("");
  const [subject, setSubject] = useState("");

  const handleSemChange = e => {
    setSem(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlepdfUrlChange = e => {
    setpdfUrl(e.target.value);
  };

  const handleSubjectChange = e => {
    setSubject(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axiosClient.post(`sem${sem}/update/notes`, {
        studentEmail: email,
        subject_name: subject,
        pdfUrl,
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
    <div className="max-w-md mx-auto  mt-10 mb-10 shadow-md shadow-gray-400 bg-gray-800 p-6   rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Upolad Notes</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="sem">
            Semester
          </label>
          <select
            id="sem"
            value={sem}
            onChange={handleSemChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>
              select sem
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="email">
            Name / MIS / Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Your MIS / Name / Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="pdfUrl">
            Drive pdfUrl
          </label>
          <input
            type="url"
            id="Drive pdfUrl"
            value={pdfUrl}
            onChange={handlepdfUrlChange}
            placeholder="Drive Link"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
            placeholder="Enter Subject Name"
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

export default UpdateNotes;
