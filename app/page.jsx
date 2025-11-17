import AboutUs from '@/components/home/AboutUs';
import CallToAction from '@/components/home/CallToAction';
import FAQs from '@/components/home/FAQs';
import FreeQuoteCTA from '@/components/home/FreeQuoteCTA';
import Hero from '@/components/home/hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';

export const metadata = {
  title: ' TeamStitchPros | Custom Sportswear & Apparel | Premium Quality',
  description:
    'Team Stitch Pros specializes in high-quality custom sportswear, embroidery, and digitizing. Get premium designs, expert craftsmanship, and fast turnaround time.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TeamStitchPros | Custom Sportswear & Apparel | Premium Quality',
    description:
      'Team Stitch Pros specializes in high-quality custom sportswear, embroidery, and digitizing. Get premium designs, expert craftsmanship, and fast turnaround time.',
    url: 'https://teamstitchpros.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Homepage banner showcasing our services',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <FreeQuoteCTA />
        <Testimonials />
        <CallToAction />
        <FAQs />
      </main>
    </>
  );
}
