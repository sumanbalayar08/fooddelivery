import React from "react";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center">
    <form className="bg-black shadow-md rounded px-4 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" for="username">
        Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Name"/>
    </div>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" for="password">
        Email
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="email" placeholder="Enter the email"/>
    </div>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" for="password">
        Location
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter the location"/>
    </div>
    <div className="mb-8">
      <label className="block text-white text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter password"/>
    </div>
    
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Create Account
      </button>
    </div>
  </form>
  </div>
  );
};
export default SignUp;
