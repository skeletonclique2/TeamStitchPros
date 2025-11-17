'use client';
import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const backgrounds = [
    'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    'https://images.unsplash.com/photo-1528341377499-f0143e637c50?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1073',
    'https://images.unsplash.com/photo-1466027449668-27f96b692ba4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172',
    'https://images.unsplash.com/photo-1497997092403-f091fcf5b6c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  ];

  return (
    <section className='relative flex items-center justify-center h-screen text-white overflow-hidden'>
      <div className='absolute inset-0'>
        {backgrounds.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
            }}
          />
        ))}
      </div>

      <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70'></div>

      <div className='relative z-10 max-w-3xl text-center px-4'>
        <h1 className='text-4xl md:text-6xl font-bold font-[Montserrat] leading-tight mb-4'>
          Bring Your <span className='text-[#FF6B00]'>Team’s Vision</span> to
          Life
        </h1>
        <p className='text-lg md:text-xl text-gray-200 mb-8 font-[Montserrat]'>
          High-quality custom sportswear, apparel, and patches crafted with
          care, precision, and attention to detail.
        </p>
        <a
          href='#quote'
          className='bg-[#FF6B00] hover:bg-[#e65a00] text-white px-8 py-3 rounded-full text-lg font-semibold font-[Montserrat] transition-all duration-300 shadow-lg hover:shadow-xl'
        >
          Get a Free Quote
        </a>
      </div>

      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20'>
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentImageIndex(index);
                setIsVisible(true);
              }, 50);
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-[#FF6B00]' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
