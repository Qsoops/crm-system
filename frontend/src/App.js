import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ClientForm from './components/ClientForm';
import ClientsList from './pages/ClientsList';
import ClientEditForm from './components/ClientEditForm';
import Modal from './components/Modal';
import { fetchClients, createClient, updateClient, deleteClient } from './api/clients';

function App() {
  const [clients, setClients] = useState([]);
  const [editingClient, setEditingClient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const data = await fetchClients();
    setClients(data);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingClient(null);
  };

  const handleCreateClient = async (newClient) => {
    await createClient(newClient);
    await loadClients();
    closeModal();
  };

  const handleDeleteClient = async (id) => {
    await deleteClient(id);
    await loadClients();
  };

  const handleEditClient = (client) => {
    setEditingClient(client);
    openModal();
  };

  const handleSaveClient = async (updatedClient) => {
    await updateClient(updatedClient.id, updatedClient);
    await loadClients();
    closeModal();
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold text-center mb-6'>CRM Система</h1>
      <button
        onClick={openModal}
        className='w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-6 shadow-md'
      >
        Добавить клиента
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {editingClient ? (
          <ClientEditForm client={editingClient} onSave={handleSaveClient} />
        ) : (
          <ClientForm onCreated={handleCreateClient} />
        )}
      </Modal>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ClientsList clients={clients} onDelete={handleDeleteClient} onEdit={handleEditClient} />
      </motion.div>
    </div>
  );
}

export default App;