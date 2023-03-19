// components/Sidebar.tsx

import React, { useState } from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [isCompact, setIsCompact] = useState(false);

  return (
    <div
      className={`h-full bg-indigo-700 text-white ${
        isCompact ? "w-20" : "w-64"
      } transition-all duration-300`}
    >
      <button
        className="block w-full bg-indigo-800 p-4 text-center text-xl font-bold"
        onClick={() => setIsCompact(!isCompact)}
      >
        {isCompact ? ">" : "<"}
      </button>
      <nav className="space-y-2">
      <Link
          href="/admin"
          className="block p-4 font-semibold hover:bg-indigo-600"
        >
          Dashboard
        </Link>
        <Link
          href="/admin/users"
          className="block p-4 font-semibold hover:bg-indigo-600"
        >
          Users
        </Link>
        <Link
          href="/admin/articles"
          className="block p-4 font-semibold hover:bg-indigo-600"
        >
          Articles
        </Link>
        <Link
          href="/admin/categories"
          className="block p-4 font-semibold hover:bg-indigo-600"
        >
          Categories
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
