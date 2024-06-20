
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stepper from '../components/Stepper';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Form = () => {

  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    food: ''
  });
  const [step, setStep] = useState(0);
  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);
  const steps = ["Account Info", "Personal Info", "Address Info", "Other Info"];
const navigate =useNavigate();

    const RegisterUser = async (e) => {
    const {username, email, password, firstName, lastName, address, phone, food} = data
    // e.preventDefault();
    try {
      await axios.post('/register', {
        username,
        email,
        password, 
        firstName, 
        lastName, 
        address,
        phone,
        food
      })
      alert("registration successful")
      navigate("/");

    } catch (error) {
      alert('Registration failed')
      console.log(error)
    }

  }

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handlePassword = () => {
    setPasswordEye(!passwordEye);
  };

  const handleConfirmPassword = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };

  const handleSubmit = async () => {
RegisterUser();
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="mt-1">
              <label className="block text-sm font-medium text-gray-700 pb-2">
                Username
              </label>
              <input
                onChange={(e) => setData({ ...data, username: e.target.value })}
                value={data.username}
                type="text"
                id="username"
                className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-1">
              <label className="block text-sm font-medium text-gray-700 pb-2">
                Email
              </label>
              <input
                onChange={(e) => setData({ ...data, email: e.target.value })}
                value={data.email}
                type="email"
                id="email"
                className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-1 relative">
              <label className="block text-sm font-medium text-gray-700 pb-2">
                Password
              </label>
              <input
                onChange={(e) => setData({ ...data, password: e.target.value })}
                value={data.password}
                type={passwordEye === false ? 'password' : 'text'}
                id="password"
                className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              <div className="text-2xl absolute top-10 right-5 cursor-pointer">
                {passwordEye === false ? (
                  <AiFillEyeInvisible onClick={handlePassword} />
                ) : (
                  <AiFillEye onClick={handlePassword} />
                )}
              </div>
            </div>
            <div className="mt-1 relative">
              <label className="block text-sm font-medium text-gray-700 pb-2">
                Confirm Password
              </label>
              <input
                onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                value={data.confirmPassword}
                type={confirmPasswordEye === false ? 'password' : 'text'}
                id="cpassword"
                className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              <div className="text-2xl absolute top-10 right-5 cursor-pointer">
                {confirmPasswordEye === false ? (
                  <AiFillEyeInvisible onClick={handleConfirmPassword} />
                ) : (
                  <AiFillEye onClick={handleConfirmPassword} />
                )}
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <div className="mt-1">
              <label className="block text-sm font-medium text-gray-700 pb-2">
                First Name
              </label>
              <input
                onChange={(e) => setData({ ...data, firstName: e.target.value })}
                value={data.firstName}
                type="text"
                id="firstName"
                className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-1">
              <label className="block text-sm font-medium text-gray-700 pb-2">
                Last Name
              </label>
              <input
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
                value={data.lastName}
                type="text"
                id="lastName"
                className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-1">
              <label className="block text-sm font-medium text-gray-700 pb-2">
                Address
              </label>
              <input
                onChange={(e) => setData({ ...data, address: e.target.value })}
                value={data.address}
                type="text"
                id="address"
                className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="mt-1">
              <label className="block text-sm font-medium text-gray-700 pb-2">
                Phone Number
              </label>
              <input
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                value={data.phone}
                type="text"
                id="phone"
                className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-1">
              <label className="block text-sm font-medium text-gray-700 pb-2">
                Favorite Food
              </label>
              <input
                onChange={(e) => setData({ ...data, food: e.target.value })}
                value={data.food}
                type="text"
                id="food"
                className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Multi Step Form</h2>
      <Stepper steps={steps} currentStep={step} />
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className="mt-6 flex justify-between">
          {step > 0 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Previous
            </button>
          )}
          <button
            type="button"
            onClick={handleNext}
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {step < steps.length - 1 ? 'Next' : 'Submit'}
          </button>
        </div>
      </form>

    </div>
  );
};

export default Form;
