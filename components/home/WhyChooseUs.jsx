'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';

const reasons = [
  'Fast Turnaround Time',
  'Premium Quality Materials',
  'Expert Embroidery & Printing',
  'Affordable Customization',
  'Trusted by Teams Nationwide',
];

export default function WhyChooseUs() {
  return (
    <section
      id='whychooseus'
      className='bg-gray-50 py-20 px-6 md:px-12 font-[Montserrat]'
    >
      <div className='max-w-5xl mx-auto md:p-0 p-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900'>
          Why <span className='text-[#FF6B00]'>Choose Us</span>
        </h2>
        <p className='text-gray-600 mb-10'>
          Delivering reliability, precision, and care with every custom order.
        </p>

        <div className='grid md:grid-cols-2 gap-6 text-left'>
          {reasons.map((reason, i) => (
            <div key={i} className='flex items-center space-x-3'>
              <CheckCircle className='text-[#FF6B00] w-6 h-6' />
              <span className='text-gray-800 font-medium'>{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
