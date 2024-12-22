// Navbar.jsx

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-black">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo et Menu Desktop */}
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold">MonSite</a>
          <ul className="hidden md:flex space-x-8 pl-8">
            <li><a href="#" >Accueil</a></li>
            <li><a href="#" >Services</a></li>
            <li><a href="#" >À Propos</a></li>
            <li><a href="#" >Contact</a></li>
          </ul>
        </div>

        {/* Bouton visible uniquement sur Desktop */}
        <button className="hidden md:block py-2 px-8 bg-green-600 border rounded text-white">
          Télécharger l&apos;application
        </button>

        {/* Bouton Hamburger visible uniquement sur Mobile */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden text-black px-4 py-2 space-y-2 flex flex-col items-start transform transition-transform duration-300 ease-in-out">
          <ul className="w-full space-y-2">
            <li><a href="#" className="block ">Accueil</a></li>
            <li><a href="#" className="block ">Services</a></li>
            <li><a href="#" className="block ">À Propos</a></li>
            <li><a href="#" className="block ">Contact</a></li>
          </ul>
          {/* Bouton Mobile en bas */}
          <button className="w-full mt-4 py-2 px-4 bg-green-600 text-white rounded">
            Télécharger l&apos;application
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
