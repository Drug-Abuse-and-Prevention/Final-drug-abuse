import React, { useEffect, useState } from 'react';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from 'react-icons/bs';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import '../../Styles/AdminStyle.css';

function AdminHome() {
  const [reportsPerDay, setReportsPerDay] = useState([]);
  const [totalReports, setTotalReports] = useState(0);
  const [resolvedReports, setResolvedReports] = useState(0);
  const [pendingReports, setPendingReports] = useState(0);

  useEffect(() => {
    // Fetch reports per day data
    axios.get('http://localhost:3001/api/reportsPerDay').then((response) => {
      // Sort the reportsPerDay array by date in ascending order
      const sortedReports = response.data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
      });

      setReportsPerDay(sortedReports);

      // Calculate and set the total number of reports
      const total = sortedReports.reduce((acc, report) => acc + report.count, 0);
      setTotalReports(total);
    });

    // Fetch number of resolved reports
    axios.get('http://localhost:3001/api/totalresolvedreports').then((response) => {
      setResolvedReports(response.data.length);
    });

    // Fetch number of pending reports
    axios.get('http://localhost:3001/api/totalpendingreports').then((response) => {
      setPendingReports(response.data.length);
    });
  }, []);

  return (
    <main className="main-container ">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Total Reports</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{totalReports}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Resolved Reports</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>{resolvedReports}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Pending Reports</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{pendingReports}</h1>
        </div>
        
      </div>

      <div className="charts">
        {/* Reports Per Day Chart */}
        <ResponsiveContainer width={1000} height={400}>
          <BarChart
            data={reportsPerDay}
            width={800}
            height={400}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={(value) => value.split('/')[0]} interval={0} />
            <YAxis dataKey="count" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" name="Reports" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default AdminHome;
