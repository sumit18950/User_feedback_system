import React from 'react';

const Footer = () => (
  <footer className="w-full mt-6 py-6 bg-[#111111] text-gray-600 border-t border-gray-800 text-center text-sm  transition-colors duration-200">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      <span className="font-semibold text-gray-500">Feedback Dashboard</span>
      <span className="mt-2 md:mt-0 text-gray-500">&copy; {new Date().getFullYear()} Feedback Dashboard. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;