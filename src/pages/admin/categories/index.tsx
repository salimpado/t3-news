// pages/admin/categories.tsx

import React, { useState } from 'react';
import AdminLayout from '~/layouts/admin';

interface Category {
  id: string;
  name: string;
}

const initialCategories: Category[] = [
  {
    id: '1',
    name: 'Technology',
  },
  {
    id: '2',
    name: 'Science',
  },
];

const CategoriesManagementPage: React.FC = () => {
  const [categories, setCategories] = useState(initialCategories);

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  const handleAddCategory = () => {
    // Implement your add category logic here
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Category Management</h2>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded"
          onClick={handleAddCategory}
        >
          New Category
        </button>
      </div>
      <div className="mt-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300">Name</th>
              <th className="border-b-2 border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="border-b border-gray-300">{category.name}</td>
                <td className="border-b border-gray-300">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleDeleteCategory(category.id)}
                  >
                    Delete
                  </button>
                  {/* Add edit button and implement edit logic if needed */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default CategoriesManagementPage;
