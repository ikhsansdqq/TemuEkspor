"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Modal from '@/components/CustomModal';

export default function Career() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedCareerPage');
    if (!hasVisited) {
      setShowModal(true);
      localStorage.setItem('hasVisitedCareerPage', 'true');
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Career</title>
        <meta name="description" content="Explore career opportunities with our company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8">Career Opportunities</h1>
        <p className="text-lg text-gray-600 mb-4">Explore the latest career opportunities with our company and be part of our dynamic team.</p>

        {/* Your career page content here */}

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <h2 className="text-2xl font-bold mb-4">Welcome to Our Career Page</h2>
          <p className="mb-4">We are excited to have you explore our career opportunities. Join our team and help us achieve great things together.</p>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </Modal>
      </main>
    </div>
  );
}
