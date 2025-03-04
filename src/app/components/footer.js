"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Footer() {
  //const [email, setEmail] = useState('');
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  /*const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
  };*/

  return (
    <footer className="relative pt-16">
      {/* Wave Border */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 120" 
        preserveAspectRatio="none" 
        className="absolute top-0 left-0 w-full h-16 z-10"
      >
        <rect width="1440" height="120" fill="white" opacity="0.1" />
        <path 
          d="M0,0 Q360,60 720,30 Q1080,0 1440,30 L1440,120 L0,120 Z" 
          fill="url(#footerGradient)"
        />
        <defs>
          <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#02a9f5" />
            <stop offset="33%" stopColor="#df7915" />
            <stop offset="66%" stopColor="#6c4484" />
            <stop offset="100%" stopColor="#db0a6c" />
          </linearGradient>
        </defs>
      </svg>

      {/* Footer Content */}
      <div 
        className="relative px-6 py-12 text-white"
        style={{
          background: 'linear-gradient(to right, #02a9f5, #df7915, #6c4484, #db0a6c)'
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-around text-center md:text-left">
          
          {/* Logo (Centered on Mobile) */}
          <div className="mb-6 md:mb-0 self-center ">
            <Image 
              src="/topten.svg" 
              alt="TopTen Marketing Logo" 
              width={150} 
              height={50} 
              className="mb-4"
            />
          </div>

          {/* Contact Information (Centered on Mobile) */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-cocoBold mb-3">Locations</h3>
            <p className="mb-2 font-cocoLight">Brooklyn, NY, USA</p>
            <p className="mb-4 font-cocoLight">Gorizia, Italia</p>

            <h3 className="text-xl font-cocoBold mb-3">Contact</h3>
            <p className="mb-2 font-cocoBold">Phone:</p>
            <p className="font-cocoLight">+1 555-555-5555</p>
            <p className="font-cocoLight">+39 333-333-3333</p>
            <p className="mt-2 font-cocoBold">Email: </p>
            <p className="font-cocoLight">info@toptenemarketing.com</p>
          </div>          
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-4 border-t font-cocoLight border-white/20">
          <p>&copy; {currentYear} TopTen eMarketing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
