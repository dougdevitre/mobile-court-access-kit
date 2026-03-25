import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const links = [
    { to: '/case-status', label: 'Check Case Status', icon: '📋' },
    { to: '/filing', label: 'File a Document', icon: '📄' },
  ];
  return (
    <div className="space-y-4">
      {links.map((link) => (
        <Link key={link.to} to={link.to}
          className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition">
          <span className="text-2xl mr-3">{link.icon}</span>
          <span className="text-lg font-medium">{link.label}</span>
        </Link>
      ))}
    </div>
  );
}
