// components/ConfirmationModal.js
"use client";

import React from 'react';

const ConfirmationModal = ({ showModal, setShowModal, onConfirm }) => {
  if (!showModal) return null;

  const handleClose = () => setShowModal(false);

  const handleConfirm = () => {
    onConfirm();
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 z-0 m-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full sm:mx-0">
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Are you sure?</h2>
            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-4">
            <p>Do you really want to reset your password?</p>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={handleClose} className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Cancel</button>
              <button onClick={handleConfirm} className="bg-red-500 text-white px-4 py-2 rounded">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
