'use client';
import React from 'react';

export default function AboutUs() {
  return (
    <section id='about' className='bg-gray-50 py-20 px-6 md:px-12'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:p-0 p-4 items-center'>
        <div className='flex justify-center'>
          <img
            src='https://cdn.pixabay.com/photo/2021/11/15/05/25/boutique-6796399_1280.jpg'
            alt='Custom Apparel'
            className='rounded-2xl shadow-lg w-full md:w-[90%]'
          />
        </div>

        <div>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>
            About <span className='text-[#FF6B00]'>TeamStitchPros</span>
          </h2>
          <p className='text-gray-700 mb-4 leading-relaxed'>
            We are passionate about bringing your ideas to life through
            high-quality custom sportswear, apparel, and patches. Every piece we
            create is crafted with precision, care, and a commitment to
            excellence.
          </p>
          <p className='text-gray-700 mb-6 leading-relaxed'>
            Whether you’re looking to outfit a sports team, promote your brand,
            or design custom patches — Team Stitch Pro delivers fast turnaround,
            premium quality, and unmatched craftsmanship.
          </p>
          <a
            href='#services'
            className='inline-block bg-[#FF6B00] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e65a00] transition-all duration-300'
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
