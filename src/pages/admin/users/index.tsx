// pages/admin/users.tsx

import React, { useState } from "react";
import AdminLayout from "~/layouts/admin";

const USERS = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Mark Johnson",
    email: "mark@example.com",
    image: "https://via.placeholder.com/50",
  },
];

const UsersManagementPage: React.FC = () => {
  const [users, setUsers] = useState(USERS);

  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name: `Random User ${users.length + 1}`,
      email: `random${users.length + 1}@example.com`,
      image: "https://via.placeholder.com/50",
    };
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">User Management</h2>
        <button
          className="rounded bg-indigo-600 px-4 py-2 text-white"
          onClick={handleAddUser}
        >
          New User
        </button>
      </div>
      <div className="mt-6">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300">Name</th>
              <th className="border-b-2 border-gray-300">Email</th>
              <th className="border-b-2 border-gray-300">Image</th>
              <th className="border-b-2 border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border-b border-gray-300">{user.name}</td>
                <td className="border-b border-gray-300">{user.email}</td>
                <td className="border-b border-gray-300">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="h-12 w-12 rounded-full"
                  />
                </td>
                <td className="border-b border-gray-300">
                  <button
                    className="rounded bg-red-500 px-2 py-1 text-white"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default UsersManagementPage;
