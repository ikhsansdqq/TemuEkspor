import React from 'react';

export default function CustomModal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
