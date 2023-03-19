// components/AdminLayout.tsx

import { type ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex ">
        <Sidebar />
        <main className="flex flex-grow flex-col bg-gray-100 p-4">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
