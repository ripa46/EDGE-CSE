import axios from "axios";

const API_URL = "http://localhost:8000/api"; // Replace with your backend server URL

export const fetchTableData = async (tableName) => {
  try {
    const response = await axios.get(`${API_URL}/${tableName}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const insertTableData = async (tableName, data) => {
  try {
    const response = await axios.post(`${API_URL}/${tableName}`, data);
    return response.data;
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error;
  }
};

export const updateTableData = async (tableName, id, data) => {
  try {
    const response = await axios.put(`${API_URL}/${tableName}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

export const deleteTableData = async (tableName, id) => {
  try {
    const response = await axios.delete(`${API_URL}/${tableName}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
