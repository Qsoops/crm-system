import React, { useState, useEffect } from 'react';

function ClientEditForm({ client, onSave }) {
  const [name, setName] = useState(client.name);
  const [email, setEmail] = useState(client.email);

  useEffect(() => {
    setName(client.name);
    setEmail(client.email);
  }, [client]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: client.id, name, email });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <h3 className='text-xl font-bold'>Редактировать клиента</h3>
      <div>
        <label className='block mb-2 text-gray-400'>Имя:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded focus:border-blue-500'
          required
        />
      </div>
      <div>
        <label className='block mb-2 text-gray-400'>Email:</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded focus:border-blue-500'
          required
        />
      </div>
      <div className='flex justify-end'>
        <button
          type='submit'
          className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded'
        >
          Сохранить
        </button>
      </div>
    </form>
  );
}

export default ClientEditForm;