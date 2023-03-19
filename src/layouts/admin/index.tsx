// components/AdminLayout.tsx

import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex">
        <Sidebar />
        <main className="bg-gray-100 p-4 w-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
