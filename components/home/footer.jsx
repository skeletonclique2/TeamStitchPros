'use client';
import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300 font-[Montserrat] pt-16 pb-8 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        <div>
          <div className='flex items-center space-x-2 mb-6'>
            <Image
              src='/tsp-logo.png'
              alt='Company Logo - TSP Official Website'
              width={180}
              height={64}
              priority
              className='h-30 w-auto object-contain transition-transform duration-200'
            />
          </div>
          <p className='text-sm mb-6 text-gray-400'>
            Your trusted partner for custom sportswear, apparel, and patches —
            built with precision and crafted with care.
          </p>
          <div className='flex space-x-4'>
            <a href='#' className='hover:text-[#FF6B00] transition-colors'>
              <Facebook size={20} />
            </a>
            <a href='#' className='hover:text-[#FF6B00] transition-colors'>
              <Instagram size={20} />
            </a>
            <a href='#' className='hover:text-[#FF6B00] transition-colors'>
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className='text-white text-lg font-semibold mb-4'>Information</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='#' className='hover:text-[#FF6B00] transition-colors'>
                About Us
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-[#FF6B00] transition-colors'>
                FAQs
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-[#FF6B00] transition-colors'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-[#FF6B00] transition-colors'>
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-white text-lg font-semibold mb-4'>
            Our Services
          </h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='#' className='hover:text-[#FF6B00] transition-colors'>
                Custom Patches
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-[#FF6B00] transition-colors'>
                Custom Apparel
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-[#FF6B00] transition-colors'>
                Sports Jerseys
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-[#FF6B00] transition-colors'>
                Embroidery Digitizing
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-[#FF6B00] transition-colors'>
                Vector Artwork Conversion
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-white text-lg font-semibold mb-4'>Contact Us</h3>
          <ul className='space-y-3 text-sm'>
            <li className='flex items-start space-x-2'>
              <MapPin size={18} className='text-[#FF6B00] mt-0.5' />
              <span>
                1209 Mountain Rd NE # 5280, Albuquerque, NM, 87110, USA
              </span>
            </li>
            <li className='flex items-start space-x-2'>
              <Mail size={18} className='text-[#FF6B00] mt-0.5' />
              <span>info@teamstitchpros.com</span>
            </li>
            <li className='flex items-start space-x-2'>
              <Phone size={18} className='text-[#FF6B00] mt-0.5' />
              <span>(505)-317-2150</span>
            </li>
          </ul>

          <div className='mt-6'>
            <h4 className='text-white text-lg font-semibold mb-2'>
              Opening Hours
            </h4>
            <p className='text-sm text-gray-400'>Mon – Fri: 9am – 11pm</p>
            <p className='text-sm text-gray-400'>Saturday: 9am – 11pm</p>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500'>
        © {new Date().getFullYear()} TeamStitch Pros LLC. All Right Reserved.
      </div>
    </footer>
  );
}
