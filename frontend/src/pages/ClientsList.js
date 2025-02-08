// src/pages/ClientsList.js
import React from "react";

function ClientsList({ clients, onDelete, onEdit }) {
  if (!clients || clients.length === 0) {
    return <p className="text-center text-gray-400">Нет клиентов</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse text-left text-sm whitespace-nowrap">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="p-2 border-b border-gray-600">#</th>
            <th className="p-2 border-b border-gray-600">Имя</th>
            <th className="p-2 border-b border-gray-600">Email</th>
            <th className="p-2 border-b border-gray-600">Действия</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr
              key={client.id}
              className="border-b border-gray-600 hover:bg-gray-700 transition duration-300"
            >
              <td className="p-2 border-r border-gray-600">{client.id}</td>
              <td className="p-2 border-r border-gray-600">{client.name}</td>
              <td className="p-2 border-r border-gray-600">{client.email}</td>
              <td className="p-2 flex items-center gap-2">
                <button
                  onClick={() => onEdit(client)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded transition duration-300"
                >
                  Редактировать
                </button>
                <button
                  onClick={() => onDelete(client.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded transition duration-300"
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientsList;