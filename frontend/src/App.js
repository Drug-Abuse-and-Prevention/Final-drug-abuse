import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import ApiService from "./Services/ApiService";
import ReportForm from "./Pages/ReportForm";
import News from "./Pages/News";
import OurMission from "./Pages/OurMission";
import Program from "./Pages/Program";
import Data from "./Pages/Data";
import Home from "./Pages/Home";
import EmployeeForm from "./Pages/EmployeeForm";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import TotalReports from "./Components/Admin/TotalReports";
import Registeredemployees from "./Components/Admin/Registeredemployees"; 

function App() {
  const [whatsappData, setWhatsappData] = useState({
    mobile: "",
    message: "",
  });

  const [isAdminLoggedIn, setAdminLoggedIn] = useState(
    localStorage.getItem("isAdminLoggedIn") === "true"
  );

  const handleWhatsAppSubmit = async () => {
    try {
      console.log("Sending WhatsApp message:", whatsappData);
      const response = await ApiService.sendWhatsAppMessage(
        whatsappData.mobile,
        whatsappData.message
      );
      console.log("WhatsApp message sent. Response:", response);
    } catch (error) {
      console.error("Error sending WhatsApp message:", error);
    }
  };

  const handleAdminLogin = (loggedIn) => {
    setAdminLoggedIn(loggedIn);
    localStorage.setItem("isAdminLoggedIn", loggedIn);
  };

  const isAdminPage = window.location.pathname === '/adminlogin';

  return (
    <Router>
      { !isAdminLoggedIn && !isAdminPage && <Header />}
      { !isAdminLoggedIn && !isAdminPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reportform" element={<ReportForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/our-mission" element={<OurMission />} />
        <Route path="/program" element={<Program />} />
        <Route path="/data" element={<Data />} />
        <Route path="/employeeregister" element={<EmployeeForm />} />
        <Route path="/adminlogin" element={<AdminLogin onLogin={handleAdminLogin} />} />
        <Route path="/totalreports" element={<TotalReports />} />
        <Route path="/registeredemployees" element={<Registeredemployees />} /> {/* Add this line */}
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
      { !isAdminLoggedIn && !isAdminPage && <Footer />}
    </Router>
  );
}

export default App;
