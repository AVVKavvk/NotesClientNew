import React, { useState } from 'react';
import { getItem, UserEmail } from '../utils/localStorage';
import { Link, useNavigate } from 'react-router-dom';
import { axiosClient } from '../utils/axiosClient';

const UpdateDetailsForm = () => {
  const email = getItem(UserEmail)
  const [sem, setSem] = useState('');
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [others, setOthers] = useState('');
  const [message, setMessage] = useState('');
  const [othersError, setOthersError] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (others.length > 100) {
      setOthersError('The "Others" field cannot be more than 100 characters.');
      return;
    } else {
      setOthersError('');
    }

    const othersArray = others.split(',').map(item => item.trim());

    try {
      const resp = await axiosClient.post('/account/upload/basic', {
        email,
        sem,
        course,
        name,
        others: othersArray,
      }); 
      if (resp) {
        setMessage('User details updated successfully!');
        navigate('/account')
        window.location.reload()
      } else {
        setMessage('Error updating details.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center mb-20 ">
      {
         !email ? (
          <div className="text-center text-gray-700">
            <p className="mb-4">Please <Link to="/auth/login" className="text-blue-600 hover:text-blue-800 font-semibold">log in</Link> again to upload your profile image.</p>
          </div>
        ) :
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Update Details</h2>
        
        {message && (
          <div className={`mb-4 p-4 text-center ${message.includes('Error') ? 'bg-red-200 text-red-600' : 'bg-green-200 text-green-600'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-black">

          {/* Name Field */}
          <div className="flex items-center space-x-4">
            <label htmlFor="sem" className="block text-sm font-medium text-gray-700 w-1/4">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-3/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Semester Field */}
          <div className="flex items-center space-x-4">
            <label htmlFor="sem" className="block text-sm font-medium text-gray-700 w-1/4">Semester</label>
            <input
              type="text"
              id="sem"
              name="sem"
              value={sem}
              onChange={(e) => setSem(e.target.value)}
              className="mt-1 block w-3/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Course Field */}
          <div className="flex items-center space-x-4">
            <label htmlFor="course" className="block text-sm font-medium text-gray-700 w-1/4">Course</label>
            <input
              type="text"
              id="course"
              name="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="mt-1 block w-3/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Others Field */}
          <div className="flex items-center space-x-4">
            <label htmlFor="others" className="block text-sm font-medium text-gray-700 w-1/4">Others (comma separated)</label>
            <input
              type="text"
              id="others"
              name="others"
              value={others}
              onChange={(e) => setOthers(e.target.value)}
              className="mt-1 block w-3/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {othersError && (
            <div className="mt-2 text-red-600 text-sm">{othersError}</div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Update Details
            </button>
          </div>
        </form>
      </div>
      }
      
    </div>
  );
};

export default UpdateDetailsForm;
