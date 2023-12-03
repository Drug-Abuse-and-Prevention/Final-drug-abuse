// frontend/src/services/ApiService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const ApiService = {
  submitReportForm: async (reportData) => {
    // API request to submit report form data to backend
    try {
      const response = await axios.post(`${BASE_URL}/report`, reportData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getEmployeeList: async () => {
    // API request to fetch employee data from backend
    try {
      const response = await axios.get(`${BASE_URL}/employee`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  sendWhatsAppMessage: async (mobile, message) => {
    // API request to send WhatsApp message
    try {
      const response = await axios.post(`${BASE_URL}/Sendwhatsapp`, {
        mobile: mobile,
        message: message,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ApiService;
