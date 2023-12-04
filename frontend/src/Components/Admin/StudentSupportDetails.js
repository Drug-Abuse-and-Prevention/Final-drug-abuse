import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";

const StudentSupportDetails = () => {
  const [studentDetails, setStudentDetails] = useState([]);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/student-support");
        setStudentDetails(response.data);
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };

    fetchStudentDetails();
  }, []);

  return (
    <div>
      <AdminHeader />
      <AdminNavbar />
      <div className="container mx-auto mt-8 p-10">
        <h1 className="text-4xl font-bold mb-4">Student Support Details</h1>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone</th>
              <th className="border border-gray-300 p-2">Roll Number</th>
              <th className="border border-gray-300 p-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {studentDetails.map((student, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{student.name}</td>
                <td className="border border-gray-300 p-2">{student.email}</td>
                <td className="border border-gray-300 p-2">{student.phone}</td>
                <td className="border border-gray-300 p-2">{student.rollNumber}</td>
                <td className="border border-gray-300 p-2">{student.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentSupportDetails;
