'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NavLink {
  name: string;
  href: string;
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex items-center justify-between w-full md:px-16 lg:px-24 xl:px-32 py-4 relative z-50">
      {/* BRANDING */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="bg-indigo-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <span className="text-2xl font-bold tracking-tighter text-neutral-900">IBRAHIM</span>
      </Link>

      {/* NAVIGATION LINKS */}
      <div className={`max-md:fixed max-md:inset-0 max-md:bg-white max-md:flex-col max-md:justify-center max-md:text-xl flex items-center gap-8 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-md:w-full opacity-100' : 'max-md:w-0 opacity-0 md:opacity-100'}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            className="text-sm font-medium text-neutral-600 hover:text-indigo-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        
        <button className="md:hidden px-8 py-3 bg-indigo-600 rounded-full text-white text-sm font-semibold">
          Hire Me
        </button>

        <button className="absolute top-6 right-6 md:hidden text-neutral-900" onClick={() => setMenuOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>

      <button className="max-md:hidden px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-full text-white text-sm font-medium transition-all shadow-sm">
        Hire Me
      </button>

      {/* BURGER MENU */}
      <button className="md:hidden text-neutral-900" onClick={() => setMenuOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 18h18M3 6h18"/></svg>
      </button>
    </nav>
  );
};

export default Navbar;