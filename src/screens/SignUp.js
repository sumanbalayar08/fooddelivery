import React, { useState } from "react";

const SignUp = () => {

  const[Credential, setCredential] = useState({name:"",email:"",location:"",password:""});


  const handleSubmit= async (e)=>{
     e.preventDefault(e);
     let response = await fetch("http://localhost:4000/api/createuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ name:Credential.name, password:Credential.password, email:Credential.email, location:Credential.location}),
     });
     const json =await response.json();
     console.warn(json); 
    }
  
  

  const onChange=(e)=>{
    setCredential({...Credential,[e.target.name]:e.target.value});
  }


  return (
    <div className="flexjustify-center items-center max-w-full px-[20%]">
    <form className="bg-black shadow-md rounded px-4 pt-6 pb-8" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" >
        Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" value={Credential.username} onChange={onChange} type="text" placeholder="Enter Name"/>
    </div>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" >
        Email
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="email" value={Credential.email} onChange={onChange}   type="email" placeholder="Enter the email"/>
    </div>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" >
        Location
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="location" value={Credential.location} onChange={onChange}  type="location" placeholder="Enter the location"/>
    </div>
    <div className="mb-8">
      <label className="block text-white text-sm font-bold mb-2" >
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" value={Credential.password} onChange={onChange}   type="password" placeholder="Enter password"/>
    </div>
    
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Create Account
      </button>
       <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Already a User?
      </button>
      
    </div>
  </form>
  </div>
  );
};
export default SignUp;
