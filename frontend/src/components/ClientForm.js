import React, { useState } from 'react';

function ClientForm({ onCreated }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return; // Проверка на пустые поля
    onCreated({ name, email }); // Вызываем callback для создания клиента
    setName(''); // Очищаем поле имени
    setEmail(''); // Очищаем поле email
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h3 className="text-xl font-bold mb-2">Добавить клиента</h3>
      <div className="mb-2">
        <label className="block mb-1">Имя:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
        Сохранить
      </button>
    </form>
  );
}

export default ClientForm;