import './globals.css';
import Navbar from '@/components/home/navbar';
import Footer from '@/components/home/footer';

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='en'>
        <body className='bg-gray-50'>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
