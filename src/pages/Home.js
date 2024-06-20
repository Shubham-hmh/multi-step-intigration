

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/users');
        setData(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/users/${id}`); 
      console.log('User deleted successfully');
      setData(data.filter(user => user._id !== id));
     
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to="/add" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          New Multi Step Form
        </Link>
      </div>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold mb-2">Form List</h2>
          <ul>
            {data.map((user) => (
              <li key={user._id} className="border-b border-gray-200 py-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">{user.username}</p>
                    <p className="text-gray-700">Email: {user.email}</p>
                    <p className="text-gray-700">First Name: {user.firstName}</p>
                    <p className="text-gray-700">Last Name: {user.lastName}</p>
                  </div>
                  <div>
                    <Link to={`/edit/${user._id}`} className="text-blue-500 hover:text-blue-700 mr-2">Edit</Link>
                    <button className="text-red-500 hover:text-red-700 " onClick={() => handleDelete(user._id)}>Delete</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
