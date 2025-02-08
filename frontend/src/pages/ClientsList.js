import React from 'react';

function ClientsList({ clients }) {
  if (!clients || clients.length === 0) {
    return <p className="text-center text-gray-500">Нет клиентов</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Список клиентов</h2>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Имя</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className="border-b">
              <td className="border p-2">{client.id}</td>
              <td className="border p-2">{client.name}</td>
              <td className="border p-2">{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientsList;