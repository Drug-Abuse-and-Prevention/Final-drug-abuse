// // ReportList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ReportList = () => {
//   const [reports, setReports] = useState([]);

//   useEffect(() => {
//     // Fetch the list of reports from the server
//     axios.get('http://localhost:3001/reports').then((response) => {
//       setReports(response.data);
//     });
//   }, []);

//   const handleStatusChange = async (id, status) => {
//     try {
//       // Update the status of the report
//       await axios.put(`http://localhost:3001/report/${id}`, { status });

//       // Update the local state to reflect the change
//       setReports((prevReports) =>
//         prevReports.map((report) =>
//           report.id === id ? { ...report, status } : report
//         )
//       );
//     } catch (error) {
//       console.error('Error updating report status:', error);
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Reports List</h2>
//       <table className="table-auto w-full">
//         <thead>
//           <tr>
//             <th>Sr. No</th>
//             <th>Title</th>
//             <th>Place of Incident</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Severity</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reports.map((report, index) => (
//             <tr key={report.id}>
//               <td>{index + 1}</td>
//               <td>{report.title}</td>
//               <td>{report.placeOfIncident}</td>
//               <td>{report.date}</td>
//               <td>{report.time}</td>
//               <td>{report.seriousness}</td>
//               <td>
//                 <button
//                   onClick={() =>
//                     handleStatusChange(
//                       report.id,
//                       report.status === 'resolved' ? 'pending' : 'resolved'
//                     )
//                   }
//                 >
//                   {report.status}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ReportList;
