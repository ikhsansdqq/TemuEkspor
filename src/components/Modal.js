"use client"

import React from 'react';

const Modal = ({ showModal, setShowModal, selectedProducts }) => {
  if (!showModal) return null;

  const handleClose = () => setShowModal(false);

  const getProductSummary = (products) => {
    return products.reduce((summary, product) => {
      if (summary[product.name]) {
        summary[product.name]++;
      } else {
        summary[product.name] = 1;
      }
      return summary;
    }, {});
  };

  const productSummary = getProductSummary(selectedProducts);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full mx-6 sm:mx-0">
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Cart Details</h2>
            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Items:</h3>
            <ul>
              {Object.keys(productSummary).map((productName, index) => (
                <li key={index} className="flex justify-between mb-2">
                  <span>{productName}</span>
                  <span>x{productSummary[productName]}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 gap-3 flex flex-col">
              <h3 className="text-lg font-semibold">Order Details:</h3>
              <p className="text-sm">Payment Time: 18-07-2023, 16:44 PM</p>
              <p className="text-sm">Payment Method: Bank Transfer</p>
              <p className="text-sm">Ref Number: 1644-1807-2023</p>
              <p className="text-sm">Amount: $640.00</p>
              <p className="text-sm">Fee (2.8%): $25.00</p>
              <p className="text-sm font-bold">Total: $665.00</p>
            </div>
            <div className="mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <svg className="h-4 w-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h8m-4 4h4" />
                </svg>
                Get Transaction Receipt
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
