'use client';
import React from 'react';

export default function FreeQuoteCTA() {
  return (
    <section
      id='quote'
      className='relative bg-[#FF6B00] flex items-center justify-center text-center text-white font-[Montserrat]'
    >
      <div className='max-w-4xl px-6'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          GET A FREE QUOTE FOR YOUR FIRST ORDER
        </h2>
        <p className='text-lg md:text-xl mb-8 text-white/90'>
          Custom apparel that speaks your team’s spirit — fast, affordable, and
          reliable.
        </p>
        <a
          href='#contact'
          className='bg-white text-[#FF6B00] px-8 py-2 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg'
        >
          Request Your Quote
        </a>
      </div>
    </section>
  );
}
