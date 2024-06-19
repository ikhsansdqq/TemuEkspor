"use client"

// pages/team.js
import Head from 'next/head';
import Image from 'next/image';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Ikhsan Assidiqie',
    position: 'Co-Founder / CEO',
    image: '/images/ikhsansdq.jpeg',
    description: 'Computer Science in Deep Neural Network | Head of External Affairs at HIPMI PT UNIVERSITAS TELKOM | Mobile and full-stack development expertise.',
    linkedin: 'https://www.linkedin.com/in/ikhsansdq',
    instagram: 'https://instagram.com/ikhsansdq',
  },
  {
    name: 'M. Ridho Sunation',
    position: 'Co-Founder / CTO',
    image: '/images/ridho.jpeg',
    description: 'Undergraduate International Informatics Student | Data Science Enthusiast',
    linkedin: 'https://www.linkedin.com/in/mridhosunation',
    instagram: 'https://instagram.com/mridhosunation',
  },
  // Add more team members as needed
];

export default function Team() {
  return (
    <div>
      <Head>
        <title>About Team</title>
        <meta name="description" content="Meet the amazing team behind our company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-10 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">About the team</h1>
          <p className="mt-4 text-lg text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start border-b pb-8">
              <Image
                src={member.image}
                alt={`${member.name}'s picture`}
                width={150}
                height={150}
                className="rounded-full object-cover mb-4 sm:mb-0 sm:mr-8"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-semibold">{member.name}</h2>
                <p className="text-xl text-gray-500">{member.position}</p>
                <p className="mt-2 text-gray-700">{member.description}</p>
                <div className="mt-4 flex justify-center sm:justify-start space-x-4">
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                      <FaInstagram size={24} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                      <FaLinkedin size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
