import React, { useState } from "react";
import axios from "axios";
import "../Styles/StyleMain.css";

const ReportForm = () => {
  const [title, setTitle] = useState("");
  const [placeOfIncident, setPlaceOfIncident] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [seriousness, setSeriousness] = useState("low");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handlePlaceChange = (e) => setPlaceOfIncident(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleSeriousnessChange = (e) => setSeriousness(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        title,
        placeOfIncident,
        date,
        time,
        description,
        seriousness,
      }
     
      const response = await axios.post(
        "http://localhost:3001/report",
        formData,
      );

      console.log("Form submitted successfully:", response.data);
      alert("Form Submitted Successfully")

      setTitle("");
      setPlaceOfIncident("");
      setDate("");
      setTime("");
      setDescription("");
      setSeriousness("low");
      
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <main className="bg-gray-100 p-8 bg">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Report an Incident
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800">
              Place of Incident
            </label>
            <input
              type="text"
              value={placeOfIncident}
              onChange={handlePlaceChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800">
              Time
            </label>
            <input
              type="time"
              value={time}
              onChange={handleTimeChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800">
              Description
            </label>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800">
              Seriousness
            </label>
            <select
              value={seriousness}
              onChange={handleSeriousnessChange}
              className="mt-1 p-2 w-full border border-gray-300 text-gray-800 rounded"
              required
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit Report
          </button>
        </form>
      </div>
    </main>
  );
};

export default ReportForm;