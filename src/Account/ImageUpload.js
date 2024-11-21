import React, { useState } from 'react';
import { axiosClient } from '../utils/axiosClient';
import { getItem, UserEmail } from '../utils/localStorage';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation

function ImageUpload() {
  const [preview, SetPreview] = useState("");
  const email = getItem(UserEmail);
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function() { SetPreview(reader.result) };
    reader.readAsDataURL(file);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!preview) return;

    try {
      const res = await axiosClient.post("/account/upload/image", {
        image_url: preview,
        email: email
      });
      setMessage('Image uploaded successfully!');
      navigate('/account')
      window.location.reload()

    } catch (err) {
      setMessage('Error updating image.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md max-w-lg mx-auto">
      {
        !email ? (
          <div className="text-center text-gray-700">
            <p className="mb-4">Please <Link to="/auth/login" className="text-blue-600 hover:text-blue-800 font-semibold">log in</Link> again to upload your profile image.</p>
          </div>
        ) : (
          <>
             {message && (
                <div className={`mb-4 p-4 text-center ${message.includes('Error') ? 'bg-red-200 text-red-600' : 'bg-green-200 text-green-600'}`}>
                  {message}
                </div>
              )}
            <input 
              type="file" 
              onChange={handleSubmit} 
              className="mb-4 p-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            {preview && <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded-full mb-4" />}
            <button 
              onClick={handleUpload} 
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Upload
            </button>
          </>
        )
      }
    </div>
  );
}

export default ImageUpload;
