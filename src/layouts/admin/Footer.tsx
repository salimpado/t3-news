// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-700 text-white p-4 text-center text-sm">
      &copy; {new Date().getFullYear()} Your Company. All rights reserved.
    </footer>
  );
};

export default Footer;
