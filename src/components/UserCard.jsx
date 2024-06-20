
import React from 'react';
import axios from 'axios';
import { useHistory, useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
  const navigate =useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${user._id}`)
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/users/${user._id}`); 
      console.log('User deleted successfully');
     
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.username}</div>
        <p className="text-gray-700 text-base">{user.email}</p>
        <p className="text-gray-700 text-base">First Name: {user.firstName}</p>
        <p className="text-gray-700 text-base">Last Name: {user.lastName}</p>
        <p className="text-gray-700 text-base">Address: {user.address}</p>
        <p className="text-gray-700 text-base">Phone: {user.phone}</p>
        <p className="text-gray-700 text-base">Favorite Food: {user.food}</p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleEdit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
