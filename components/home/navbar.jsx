'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Search, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const mobileMenuRef = useRef(null);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Custom',
      dropdown: [
        {
          name: 'Apparel',
          submenu: ['T-Shirts', 'Hoodies', 'Sweatshirts', 'Tracksuits'],
        },
        { name: 'Patches' },
      ],
    },
    {
      name: 'Digitizing',
      dropdown: ['Embroidery Digitizing', 'Vector Artwork'],
    },
    {
      name: 'Sports',
      dropdown: [
        'Ice Hockey',
        'Baseball',
        'Football',
        'Lacrosse',
        'Soccer',
        'Basketball',
      ],
    },
    { name: 'Contact Us', href: '/contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className='bg-white shadow-md fixed w-full z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <Link href='/' className='flex items-center flex-shrink-0'>
            <Image
              src='/tsp-logo.png'
              alt='Company Logo - TSP Official Website'
              width={180}
              height={64}
              priority
              className='h-12 w-auto object-contain'
            />
          </Link>

          <div className='hidden md:flex items-center space-x-8'>
            <ul className='flex space-x-8 items-center text-gray-800 font-medium'>
              {navigationItems.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </ul>

            <div className='relative'>
              <input
                type='text'
                placeholder='What are you looking for?'
                className='pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#FF6B00] focus:border-[#FF6B00] text-sm w-64 transition-colors'
              />
              <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                <Search size={16} className='text-gray-400' />
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
            aria-label='Toggle menu'
          >
            {isMobileMenuOpen ? (
              <X size={24} className='text-gray-700' />
            ) : (
              <Menu size={24} className='text-gray-700' />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className='md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200 max-h-[80vh] overflow-y-auto'
          >
            <div className='px-4 py-2 space-y-1'>
              {navigationItems.map((item) => (
                <MobileNavItem
                  key={item.name}
                  item={item}
                  activeDropdown={activeDropdown}
                  toggleDropdown={toggleDropdown}
                  closeMobileMenu={closeMobileMenu}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (item.href) {
    return (
      <li>
        <Link
          href={item.href}
          className='hover:text-[#FF6B00] text-sm transition-colors duration-200'
        >
          {item.name}
        </Link>
      </li>
    );
  }

  return (
    <li ref={dropdownRef} className='relative'>
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className='hover:text-[#FF6B00] text-sm transition-colors duration-200 flex items-center'
      >
        {item.name}
        <ChevronDown
          size={16}
          className={`ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && item.dropdown && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className='absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 z-50'
        >
          {item.dropdown.map((dropdownItem) => (
            <DropdownItem
              key={dropdownItem.name || dropdownItem}
              item={dropdownItem}
            />
          ))}
        </div>
      )}
    </li>
  );
}

function DropdownItem({ item }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setIsSubmenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (typeof item === 'string') {
    return (
      <div className='px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer transition-colors'>
        {item}
      </div>
    );
  }

  return (
    <div
      ref={submenuRef}
      className='relative'
      onMouseEnter={() => setIsSubmenuOpen(true)}
      onMouseLeave={() => setIsSubmenuOpen(false)}
    >
      <div className='px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer flex justify-between items-center transition-colors'>
        <span>{item.name}</span>
        <ChevronRight size={16} />
      </div>

      {isSubmenuOpen && item.submenu && (
        <div className='absolute top-0 left-full bg-white shadow-lg rounded-lg py-2 w-40 ml-1'>
          {item.submenu.map((subItem) => (
            <div
              key={subItem}
              className='px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer transition-colors'
            >
              {subItem}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNavItem({
  item,
  activeDropdown,
  toggleDropdown,
  closeMobileMenu,
}) {
  if (item.href) {
    return (
      <Link
        href={item.href}
        onClick={closeMobileMenu}
        className='block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div className='border-b border-gray-100 last:border-b-0'>
      <button
        onClick={() => toggleDropdown(item.name)}
        className='w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'
      >
        <span>{item.name}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${
            activeDropdown === item.name ? 'rotate-180' : ''
          }`}
        />
      </button>

      {activeDropdown === item.name && item.dropdown && (
        <div className='pl-6 py-2 space-y-1'>
          {item.dropdown.map((dropdownItem) => (
            <MobileDropdownItem
              key={dropdownItem.name || dropdownItem}
              item={dropdownItem}
              closeMobileMenu={closeMobileMenu}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function MobileDropdownItem({ item, closeMobileMenu }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  if (typeof item === 'string') {
    return (
      <div
        onClick={closeMobileMenu}
        className='block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors'
      >
        {item}
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
        className='w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors'
      >
        <span>{item.name}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${
            isSubmenuOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isSubmenuOpen && item.submenu && (
        <div className='pl-4 py-1 space-y-1'>
          {item.submenu.map((subItem) => (
            <div
              key={subItem}
              onClick={closeMobileMenu}
              className='block px-4 py-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors'
            >
              {subItem}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
