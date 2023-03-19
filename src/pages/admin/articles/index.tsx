// pages/admin/articles.tsx

import React, { useState } from 'react';
import AdminLayout from '~/layouts/admin';

interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  publishedAt: Date;
  authorId: string;
  categories: string[];
}

const initialArticles: Article[] = [
  // ... (your initial articles array)
];

const ArticlesManagementPage: React.FC = () => {
  const [articles, setArticles] = useState(initialArticles);

  const handleDeleteArticle = (id: string) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  const handleAddArticle = () => {
    // Implement your add article logic here
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Article Management</h2>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded"
          onClick={handleAddArticle}
        >
          New Article
        </button>
      </div>
      <div className="mt-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300">Title</th>
              <th className="border-b-2 border-gray-300">Published At</th>
              <th className="border-b-2 border-gray-300">Categories</th>
              <th className="border-b-2 border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td className="border-b border-gray-300">{article.title}</td>
                <td className="border-b border-gray-300">
                  {article.publishedAt.toLocaleDateString()}
                </td>
                <td className="border-b border-gray-300">
                  {article.categories.join(', ')}
                </td>
                <td className="border-b border-gray-300">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleDeleteArticle(article.id)}
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

export default ArticlesManagementPage;
