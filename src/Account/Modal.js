import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className=" fixed  inset-8 flex  z-50 bg-black bg-opacity-50">
      <div className="bg-white w-[90%] max-w-md rounded-lg p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white flex justify-center items-center hover:text-gray-300 bg-red-600 w-6 h-6 rounded-full "
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
