// pages/admin.tsx

import React from 'react';
import AdminLayout from '~/layouts/admin';

const AdminPage: React.FC = () => {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold">Welcome to the Admin Dashboard</h2>
      <p className="mt-4">
        Here you can manage Users, Articles, and Categories. Use the sidebar to navigate to the desired management section.
      </p>
    </AdminLayout>
  );
};

export default AdminPage;
