import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminHeader from './AdminHeader';

function RegisteredEmployees() {
  const [employees, setEmployees] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/registeredemployees');
        const employeeData = response.data;
        setEmployees(employeeData);
        setOriginalData(employeeData); // Set the original unfiltered data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching registered employees:', error);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    applyFilter(filterType); // Apply the filter when the filter type changes
  }, [filterType]);

  const applyFilter = (type) => {
    switch (type) {
      case 'all':
        setEmployees(originalData);
        break;
      case 'verified':
        setEmployees(originalData.filter((employee) => employee.verified));
        break;
      case 'pending':
        setEmployees(originalData.filter((employee) => !employee.verified));
        break;
      default:
        setEmployees(originalData);
    }
  };

  const handleVerification = async (employeeId, currentStatus, email) => {
    try {
      // Make a request to update the verification status
      const response = await axios.put(
        `http://localhost:3001/api/verifyEmployee/${employeeId}`,
        {
          verified: !currentStatus,
        }
      );

      // Update the local state to reflect the change
      const updatedEmployee = response.data;
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee._id === updatedEmployee._id ? updatedEmployee : employee
        )
      );

      // Update the original data to reflect the change
      setOriginalData((prevData) =>
        prevData.map((employee) =>
          employee._id === updatedEmployee._id ? updatedEmployee : employee
        )
      );

      // Send email to the employee based on verification status
      const emailSubject = currentStatus ? 'Verification Removed' : 'Verification Success';

      const emailText = currentStatus
        ? "You have been removed from the Alert List of Drug abuse reporting website."
        : "Your registration with Drug Abuse Reporting Website is successful. Next Steps: Please WhatsApp 'join flame-color' to +14155238886 to start getting reports on your phone number.";

      const emailHtml = currentStatus
        ? `<p>You have been removed from the Alert List of Drug abuse reporting website.</p>`
        : `
            <p>Your registration with Drug Abuse Reporting Website is successful.</p>
            <p><strong>Next Steps:</strong> Please <a href="https://api.whatsapp.com/send?phone=+14155238886&text=join%20flame-color" target="_blank">Click Here</a> to start getting reports on your phone number.</p>
            OR you can  WhatsApp 'join flame-color to +14155238886 to start getting reports on your phone number.'
          `;

      await axios.post('http://localhost:3001/api/send-email', {
        to: email,
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
      });
    } catch (error) {
      console.error('Error updating employee verification status:', error);
    }
  };

  useEffect(() => {
    // Apply the filter immediately after updating the state
    applyFilter(filterType);
  }, [employees, filterType]);

  const handleClickFilter = (type) => {
    setFilterType(type);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <AdminHeader />
      <div className="container mx-auto mt-8 ">
        <div className='flex'>
          <h1 className="text-3xl font-bold mb-4 ml-3">Total Registered Employees</h1>
          <div>
            <Link to="/admindashboard">
              <button className="bg-blue-500 text-white px-4 py-2 rounded ml-5">Dashboard</button>
            </Link>
          </div>
        </div>
        {/* Filter Buttons */}
        <div className="flex space-x-4 mb-4 ml-3">
          <button
            className={`${
              filterType === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            } px-4 py-2 rounded`}
            onClick={() => handleClickFilter('all')}
          >
            All
          </button>
          <button
            className={`${
              filterType === 'verified' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            } px-4 py-2 rounded`}
            onClick={() => handleClickFilter('verified')}
          >
            Verified
          </button>
          <button
            className={`${
              filterType === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            } px-4 py-2 rounded`}
            onClick={() => handleClickFilter('pending')}
          >
            Pending Verification
          </button>
        </div>
        {/* Employee Table */}
        <table className="min-w-full border border-gray-300 ">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-r ">Sr. No</th>
              <th className="py-2 px-4 border-r">Name</th>
              <th className="py-2 px-4 border-r">Employee ID</th>
              <th className="py-2 px-4 border-r">Post</th>
              <th className="py-2 px-4 border-r">Mobile No</th>
              <th className="py-2 px-4 border-r">Email</th>
              <th className="py-2 px-4 border-r">Today Location</th>
              <th className="py-2 px-4">Verification Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee._id} className={index % 2 === 0 ? 'bg-gray-800' : ''}>
                <td className="py-2 px-4 border-r">{index + 1}</td>
                <td className="py-2 px-4 border-r">{employee.name}</td>
                <td className="py-2 px-4 border-r">{employee.employeeId}</td>
                <td className="py-2 px-4 border-r">{employee.post}</td>
                <td className="py-2 px-4 border-r">{employee.mobile}</td>
                <td className="py-2 px-4 border-r">{employee.email}</td>
                <td className="py-2 px-4 border-r">{employee.todayLocation}</td>
                <td className="py-2 px-4">
                  <button
                    className={`${
                      employee.verified ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    } px-4 py-2 rounded`}
                    onClick={() => handleVerification(employee._id, employee.verified, employee.email)}
                  >
                    {employee.verified ? 'Unverify' : 'Verify'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegisteredEmployees;
