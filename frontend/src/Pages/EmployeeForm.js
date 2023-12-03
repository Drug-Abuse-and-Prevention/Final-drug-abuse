import React, { useState } from "react";
import axios from "axios";

const EmployeeForm = () => {
  const [name, setName] = useState("");
  const [employeeId,setEmployeeId] = useState();
  const [todayLocation, setTodayLocation] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("warden");

  
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmployeeIdChange = (e) => setEmployeeId(e.target.value);
  const handleLocationChange = (e) => setTodayLocation(e.target.value);
  const handleMobileChange = (e) => setMobile(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePostChange = (e) => setPost(e.target.value);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        name,
        employeeId,
        todayLocation,
        mobile,
        email,
        post,
      }
     
      const response = await axios.post(
        "http://localhost:3001/employee",
        formData,
      );

      console.log("Form submitted successfully:", response.data);

      setName("");
      setEmployeeId("");
      setTodayLocation("");
      setMobile("");
      setEmail("");
      setPost("warden");

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <main className="bg-gray-300 p-8 ">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Employee Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800">
              EmployeeId
            </label>
            <input
              type="text"
              value={employeeId}
              onChange={handleEmployeeIdChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800">
              Today's Location
            </label>
            <input
              type="text"
              value={todayLocation}
              onChange={handleLocationChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800">
              Mobile 
            </label>
            <input
              type="text"
              value={mobile}
              onChange={handleMobileChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800">
              Email 
            </label>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-gray-800"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800">
              Post
            </label>
            <select
              value={post}
              onChange={handlePostChange}
              className="mt-1 p-2 w-full border border-gray-300 text-gray-800 rounded"
              required
            >
              <option value="warden">Warden</option>
              <option value="securityGuard">SecurityGuard</option>
              <option value="rakshak">Rakshak</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit Form
          </button>
        </form>
      </div>
    </main>
  );
};

export default EmployeeForm;


