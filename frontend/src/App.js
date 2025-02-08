import React, { useState, useEffect } from 'react';
import ClientForm from './components/ClientForm';
import ClientsList from './pages/ClientsList';
import { fetchClients, createClient } from './api/clients'; // Импортируем функции API

function App() {
  const [clients, setClients] = useState([]); // Состояние для клиентов

  // Функция для загрузки клиентов с сервера
  const loadClients = async () => {
    try {
      const data = await fetchClients();
      setClients(data); // Обновляем состояние клиентов
    } catch (error) {
      console.error('Не удалось загрузить клиентов:', error);
    }
  };

  // При монтировании компонента загружаем клиентов
  useEffect(() => {
    loadClients();
  }, []);

  // Функция для создания нового клиента
  const handleCreateClient = async (newClient) => {
    try {
      await createClient(newClient); // Отправляем данные на сервер
      loadClients(); // Обновляем список клиентов
    } catch (error) {
      console.error('Не удалось создать клиента:', error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">CRM Система</h1>
      {/* Форма для создания клиентов */}
      <ClientForm onCreated={handleCreateClient} />
      {/* Список клиентов */}
      <ClientsList clients={clients} />
    </div>
  );
}

export default App;