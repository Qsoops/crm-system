import axios from 'axios';

// URL вашего backend'а (замените на актуальный адрес)
const API_URL = 'http://localhost:8000/api/clients';

// Функция для получения списка клиентов
export const fetchClients = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Возвращаем данные из ответа
  } catch (error) {
    console.error('Ошибка при получении клиентов:', error);
    throw error;
  }
};

// Функция для создания нового клиента
export const createClient = async (clientData) => {
  try {
    await axios.post(API_URL, clientData); // Отправляем POST-запрос
  } catch (error) {
    console.error('Ошибка при создании клиента:', error);
    throw error;
  }
};