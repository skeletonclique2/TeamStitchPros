'use client';
import React from 'react';

export default function CallToAction() {
  return (
    <section className='bg-gray-50 py-20 px-6 md:px-12 font-[Montserrat]'>
      <div className='max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center md:p-0 p-4 gap-12'>
        <div className='flex-1 text-center lg:text-left'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-4'>
            Ready to Bring <span className='text-[#FF6B00]'>Your Vision</span>{' '}
            to Life?
          </h2>
          <p className='text-gray-600 text-lg mb-8'>
            Partner with{' '}
            <span className='font-semibold text-gray-900'>TeamStitchPros</span>{' '}
            to create custom patches, jerseys, and apparel that stand out. From
            concept to delivery, we ensure every detail reflects your brand’s
            quality and passion.
          </p>
          <button className='bg-[#FF6B00] text-white font-semibold py-2 px-8 rounded-full shadow-md hover:bg-[#e86000] transition-all duration-300'>
            Get Started Today
          </button>
        </div>

        <div className='flex-1 flex justify-center'>
          <img
            src='https://images.unsplash.com/photo-1611077544775-6e72542a206f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1089'
            alt='Team Stitch Pro Custom Apparel'
            className='w-full max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500'
          />
        </div>
      </div>
    </section>
  );
}
