// TotalReports.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminHeader from './AdminHeader';

function TotalReports() {
  const [allReports, setAllReports] = useState([]);
  const [resolvedReports, setResolvedReports] = useState([]);
  const [unresolvedReports, setUnresolvedReports] = useState([]);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    // Fetch all reports
    axios.get('http://localhost:3001/api/totalreports').then((response) => {
      const reports = response.data;
      setAllReports(reports);

      // Separate reports into resolved and unresolved
      const resolved = reports.filter((report) => report.resolved);
      const unresolved = reports.filter((report) => !report.resolved);

      setResolvedReports(resolved);
      setUnresolvedReports(unresolved);
    });
  }, []);

  const resolveReport = async (reportId) => {
    try {
      // Make a request to mark the report as resolved in the backend
      await axios.put(`http://localhost:3001/api/resolveReport/${reportId}`);
  
      // Update the local state to reflect the change
      const updatedReports = allReports.map((report) =>
        report._id === reportId ? { ...report, resolved: true } : report
      );
      setAllReports(updatedReports);
    } catch (error) {
      console.error('Error resolving report:', error);
    }
  };

  const handleFilterChange = (filter) => {
    setFilterType(filter);
  };

  const getFilteredReports = () => {
    switch (filterType) {
      case 'resolved':
        return resolvedReports;
      case 'unresolved':
        return unresolvedReports;
      default:
        return allReports;
    }
  };

  return (
    <div>
      <AdminHeader/>
    <div className="container mx-auto mt-8 p-10">
      
      <h1 className="text-3xl font-bold mb-4">All Reports</h1>

      {/* Filter Buttons */}
      <div className="mb-4">
        <button
          onClick={() => handleFilterChange('all')}
          className={`mr-2 px-4 py-2 rounded ${
            filterType === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
        >
          All Reports
        </button>
        <button
          onClick={() => handleFilterChange('resolved')}
          className={`mr-2 px-4 py-2 rounded ${
            filterType === 'resolved' ? 'bg-green-500 text-white' : 'bg-gray-300'
          }`}
        >
          Resolved
        </button>
        <button
          onClick={() => handleFilterChange('unresolved')}
          className={`px-4 py-2 rounded ${
            filterType === 'unresolved' ? 'bg-red-500 text-white' : 'bg-gray-300'
          }`}
        >
          Unresolved
        </button>
      </div>

      {/* Reports Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {getFilteredReports().map((report) => (
          <div
            key={report._id}
            className={`border p-4 rounded shadow-md ${
              report.resolved ? 'bg-green-100 border-green-300' : 'bg-red-100 border-red-300'
            }`}
          >
            <h2
              className={`text-${
                report.resolved ? 'green' : 'red'
              }-800 font-semibold mb-2`}
            >
              {report.resolved ? 'Resolved' : 'Unresolved'}
            </h2>
            <p className="text-gray-800">Title: {report.title}</p>
            <p className="text-gray-600">Place of Incident: {report.placeOfIncident}</p>
            <p className="text-gray-600">Date: {report.date}</p>
            <p className="text-gray-600">Time: {report.time}</p>
            <p className="text-gray-600">Description: {report.description}</p>
            <p className="text-gray-600">Seriousness: {report.seriousness}</p>
            {!report.resolved && (
              <button
                onClick={() => resolveReport(report._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Resolve
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default TotalReports;
