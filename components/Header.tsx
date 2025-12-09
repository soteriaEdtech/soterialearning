"use client";
import Link from 'next/link';
// import { Menu } from '@headlessui/react';
import { useState } from 'react';
// import logo from '../public/logos/main.jpg';
// import Image from 'next/image';

const navigation = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Services', href: '/services' },
  { name: 'Process', href: '/process' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-black/40" 
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)`,
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="shrink-0">
            <Link href="/" className="font-bold text-xl text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
              {/* <Image src={logo} alt="logo" className='w-8'/> */}
             <p className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> Soteria Learning </p>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-200 transition-all duration-200 ease-out hover:text-cyan-300 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-linear-to-r from-blue-400 to-cyan-300 transform scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
            <button className="text-sm font-bold text-white bg-linear-to-r from-blue-500 to-cyan-500 px-4 py-2 rounded-lg transition-all duration-200 ease-out hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 active:scale-95">
              Get Started
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-cyan-300 transition-colors"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-200 transition-all duration-200 ease-out hover:bg-cyan-500/20 hover:text-cyan-300 hover:pl-4 rounded-md relative overflow-hidden group"
                >
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
              <button className="block w-full px-3 py-2 text-left text-base font-medium bg-linear-to-r from-blue-500 to-cyan-500 text-white transition-all duration-200 ease-out hover:shadow-lg hover:shadow-cyan-500/50 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}