import React from 'react';

const services = [
  {
    title: 'Design Custom Patches',
    description:
      'Crafted to your specifications — from embroidered and PVC to leather and chenille patches. Designed for durability and distinction.',
    image:
      'https://images.unsplash.com/photo-1577595353464-ac669bc9de95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    buttonText: 'Design Now',
  },
  {
    title: 'Create Custom Apparel',
    description:
      'Design branded T-shirts, hoodies, sweatshirts, and tracksuits — perfect for professional branding or stylish casual wear.',
    image:
      'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    buttonText: 'Create Now',
  },
  {
    title: 'Custom Sports Jerseys',
    description:
      'Fully customizable sports uniforms — add your logo, player names, and team colors for a professional and cohesive look.',
    image:
      'https://images.unsplash.com/photo-1708577907839-1240466aee53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
    buttonText: 'Customize Now',
  },
  {
    title: 'Vector Artwork Conversion',
    description:
      'Transform your artwork into high-quality vector graphics, ideal for embroidery, printing, or promotional materials.',
    image:
      'https://images.unsplash.com/photo-1686044718485-fd565938f99a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    buttonText: 'Convert Now',
  },
  {
    title: 'Embroidery Digitizing',
    description:
      'Convert your artwork into precise embroidery files for flawless stitching — clean, detailed, and production-ready.',
    image:
      'https://images.unsplash.com/photo-1671535108620-d169ce916f09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    buttonText: 'Digitize Now',
  },
];

export default function Services() {
  return (
    <section className='py-20 bg-gray-50' id='services'>
      <div className='max-w-7xl mx-auto px-6 lg:px-12 text-center'>
        <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-4'>
          Our Professional Services
        </h2>
        <p className='text-gray-600 text-lg mb-12'>
          From concept to creation — Stitch Pros delivers top-tier
          craftsmanship, premium materials, and personalized service every step
          of the way.
        </p>

        <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-11'>
          {services.map((service, index) => (
            <div
              key={index}
              className='group bg-white rounded-2xl overflow-hidden shadow-md'
            >
              <div className='overflow-hidden'>
                <img
                  src={service.image}
                  alt={service.title}
                  className='h-48 w-full object-cover group-hover:scale-104 transition-transform duration-700'
                />
              </div>
              <div className='p-6 text-left'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#FF6B00] transition-colors duration-300'>
                  {service.title}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  {service.description}
                </p>
              </div>
              <div className='flex justify-center mt-auto pb-6'>
                <button className='bg-[#FF6B00] text-white font-medium py-1.5 px-6 rounded-full hover:bg-[#e86000] transition-all duration-300'>
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
