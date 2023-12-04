import React, { useState } from 'react';
import AdminHeader from "../Components/Admin/AdminHeader";
import AdminHome from "../Components/Admin/AdminHome";
import Sidebar from "../Components/Admin/Sidebar";
import AdminNavbar from "../Components/Admin/AdminNavbar";
import TotalReports from '../Components/Admin/TotalReports'; // Import the new component

function AdminDashboard() {
   
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const openSidebar = () => {
        setSidebarOpen(true);
         };
    const closeSidebar = () => {
            setSidebarOpen(false);
          };
        
    const [showTotalReports, setShowTotalReports] = useState(false); // Add state for Total Reports
    
    const toggleTotalReports = () => {
      setShowTotalReports(!showTotalReports);
      closeSidebar(); 
    };

    return (
      <div className="admin-dashboard mb-10">
        <AdminHeader />
        <AdminNavbar openSidebar={openSidebar}/>
        <div style={{ display: "flex" }} className='dashboard'> 
          
          <Sidebar OpenSidebarToggle={isSidebarOpen} openSidebar={closeSidebar} toggleTotalReports={toggleTotalReports} />
          
          {showTotalReports ? <TotalReports /> : <AdminHome />}
            
        </div>
      </div>
  );
}

export default AdminDashboard;

