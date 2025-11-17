'use client';
import React from 'react';

const testimonials = [
  {
    name: 'Sarah Khan',
    role: 'Team Manager - Elite FC',
    quote:
      'Outstanding quality and quick delivery! Our entire team loves the new uniforms.',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Daniel Ahmed',
    role: 'Brand Owner - StitchX',
    quote:
      'Exceptional embroidery work. The patches exceeded expectations and look premium.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Ayesha Malik',
    role: 'Marketing Head - ActiveWear Co.',
    quote:
      'Professional service and attention to detail. Highly recommended for any custom work.',
    img: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
];

export default function Testimonials() {
  return (
    <section
      id='testimonials'
      className='bg-white py-20 px-6 md:px-12 font-[Montserrat]'
    >
      <div className='max-w-6xl mx-auto md:p-0 p-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-10 text-gray-900'>
          What Our <span className='text-[#FF6B00]'>Clients Say</span>
        </h2>

        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className='bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300'
            >
              <img
                src={t.img}
                alt={t.name}
                className='w-16 h-16 rounded-full mx-auto mb-4 object-cover'
              />
              <p className='text-gray-600 italic mb-4'>"{t.quote}"</p>
              <h4 className='font-semibold text-gray-900'>{t.name}</h4>
              <span className='text-sm text-gray-500'>{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
