import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/users/all_users';

export const fetchClients = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createClient = async (clientData) => {
  await axios.post(API_URL, clientData);
};

export const updateClient = async (clientId, updatedData) => {
  await axios.put(`${API_URL}/${clientId}`, updatedData);
};

export const deleteClient = async (clientId) => {
  await axios.delete(`${API_URL}/${clientId}`);
};