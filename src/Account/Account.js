import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { deleteUser, getItem, Key_Access_Token, UserEmail, UserID } from "../utils/localStorage";
import { axiosClient } from "../utils/axiosClient";
import { TOAST_SUCCESS } from "../App";
import { showToast } from "../slice/appConfigSlice";
import { useDispatch } from "react-redux";
import Modal from "./Modal";

const ImageUpload = lazy(() => import("./ImageUpload"));
const BasicDetails = lazy(() => import("./BasicDetails"));

function Account() {
  const email = getItem(UserEmail);
  const [user, setUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const res = await axiosClient.post('/auth/user', { email });
      setUser(res.result.user);
    } catch (err) {
      console.log(err);
    }
  };

  const logoutSubmit = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      try {
        deleteUser(Key_Access_Token);
        deleteUser(UserEmail);
        deleteUser(UserID);

        dispatch(
          showToast({
            type: TOAST_SUCCESS,
            message: "Successfully Logout",
          })
        );

        navigate("/auth/login");
      } catch (e) {
        console.log(e);
      }
    }
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (email) {
      fetchUser();
    } else {
      navigate("/auth/login");
    }
  }, []);

  return (
    <div>
      {!email ? (
        <div className="text-center text-gray-700">
          <p className="mb-4">
            Please{" "}
            <Link
              to="/auth/login"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              log in
            </Link>{" "}
            again to upload your profile image.
          </p>
        </div>
      ) : (
        <div className="max-w-[1330px] mx-auto flex flex-col px-8">
          <div className="flex md:flex-row flex-col w-full gap-8 mx-auto">
            {/* Profile Section */}
            <div className="md:w-1/3 flex flex-col items-center p-6 rounded-lg shadow-xl">
              <a
                href={
                  user?.image ||
                  "https://res.cloudinary.com/dufi9bxnq/image/upload/v1731948868/VipinNotes%20Users/dummy.png"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    user?.image ||
                    "https://res.cloudinary.com/dufi9bxnq/image/upload/v1731948868/VipinNotes%20Users/dummy.png"
                  }
                  alt="Profile"
                  className="w-[200px] h-[200px] rounded-full object-cover mb-4"
                />
              </a>
              <button
                onClick={() =>
                  openModal(<ImageUpload  />)
                }
                className="px-2 py-1 m-2 w-[100px] text-center rounded text-lg bg-indigo-600 hover:bg-indigo-700"
              >
                Upload
              </button>
              max_size : 5MB
            </div>

            {/* User Details */}
            <div className="md:w-2/3 flex flex-col p-6 rounded-lg shadow-xl">
              <div className="space-y-4">
                <h1 className="text-xl flex">
                  <span className="text-gray-500">Name:</span>
                  <span className="ml-2">{user?.name}</span>
                </h1>
                <h1 className="text-lg flex">
                  <span className="text-gray-500">Email:</span>
                  <span className="ml-2">{user?.email}</span>
                </h1>
                <h1 className="text-lg flex">
                  <span className="text-gray-500">Phone Number:</span>
                  <span className="ml-2">{user?.phNumber}</span>
                </h1>
                <h1 className="text-lg flex">
                  <span className="text-gray-500">Semester:</span>
                  <span className="ml-2">{user?.sem}</span>
                </h1>
                <h1 className="text-lg flex">
                  <span className="text-gray-500">Course:</span>
                  <span className="ml-2">{user?.course}</span>
                </h1>
                <h1 className="text-lg">
                  <span className="text-gray-500">Others:</span>
                  <ul className="ml-2 list-disc text-white list-inside">
                    {user?.others?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </h1>
              </div>
              <button
                onClick={() =>
                  openModal(<BasicDetails  />)
                }
                className="mt-4 py-2 flex justify-center mx-auto w-[150px] text-center bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Update Details
              </button>
            </div>
          </div>

          {/* Logout Button */}
          <div className="flex mx-auto justify-center items-center my-4 w-[200px] text-2xl">
            <button
              onClick={logoutSubmit}
              className="px-2 py-3 m-2 w-full text-center rounded-md bg-red-600 hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent}
      </Modal>
    </div>
  );
}

export default Account;
