'use client';
import React, { useState } from 'react';

const faqs = [
  {
    q: 'How long does a custom order take?',
    a: 'Typically, 7-10 business days depending on quantity and complexity.',
  },
  {
    q: 'Can I order a single item?',
    a: 'Yes! We offer flexible order quantities for both individuals and teams.',
  },
  {
    q: 'Do you offer international shipping?',
    a: 'Yes, we ship worldwide with trusted courier partners.',
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id='faqs'
      className='bg-gray-50 py-20 px-6 md:px-12 font-[Montserrat]'
    >
      <div className='max-w-4xl mx-auto md:p-0 p-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-10 text-gray-900'>
          Frequently Asked <span className='text-[#FF6B00]'>Questions</span>
        </h2>

        {faqs.map((faq, i) => (
          <div
            key={i}
            className='border-b border-gray-200 py-4 text-left cursor-pointer'
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <h3 className='flex justify-between items-center text-lg font-medium text-gray-800'>
              {faq.q}
              <span className='text-[#FF6B00] font-bold'>
                {openIndex === i ? '−' : '+'}
              </span>
            </h3>
            {openIndex === i && (
              <p className='mt-3 text-gray-600 transition-all duration-300'>
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
