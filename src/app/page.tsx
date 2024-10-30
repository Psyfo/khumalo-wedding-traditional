'use client';
import Booklet from './Booklet/Booklet';
import Dress from './Dress/Dress';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Reception from './Reception/Reception';
import Schedule from './Schedule/Schedule';
import Synopsis from './Synopsis/Synopsis';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <div>
      <ParallaxProvider>
        <Header />
      </ParallaxProvider>
      <Synopsis />
      <Schedule />
      <Reception />
      <Dress />
      <Booklet />
      <Footer />
    </div>
  );
}
