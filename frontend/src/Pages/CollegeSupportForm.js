import React, { useState } from "react";
import axios from "axios";

const CollegeSupportForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rollNumber: "", // Updated field name
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/college-support", formData);
      console.log("Form submitted successfully:", response.data);
      // Reset the form after submission if needed
      setFormData({
        name: "",
        email: "",
        phone: "",
        rollNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 ">College Support Form</h1>
      <form onSubmit={handleSubmit} className="">
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Roll Number: {/* Updated label */}
          <input
            type="text"
            name="rollNumber" // Updated field name
            value={formData.rollNumber}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="border border-gray-300 rounded p-2 w-full"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CollegeSupportForm;
