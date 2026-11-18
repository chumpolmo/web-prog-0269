"use client";

import React, { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
];

export default function MyMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand / Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-xl font-bold text-indigo-600">
              BrandLogo
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#get-started"
              className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                /* Close (X) Icon */
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100" id="mobile-menu">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-3 bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-base font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
