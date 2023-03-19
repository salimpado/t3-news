// components/Header.tsx

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-700 text-white p-4 font-bold text-xl flex justify-between">
      <Link href="/admin" className="cursor-pointer">Admin Dashboard
      </Link>
      {/* Link Logout */}
      <Link href="/" className="cursor-pointer">Logout
      </Link>
    </header>
  );
};

export default Header;

