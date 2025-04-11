import React from 'react';
import Footer from './components/footer/footer';
import CTA from './components/cta/cta';
import Partner from './components/partner/partner';
import Process from './components/process/process';
import Trust from './components/trust/trust';
import Compliance from './components/compliance/compliance';
import Represent from './components/represent/represent';
import Offerings from './components/offerings/offerings';
import Consultant from './components/consultant/consultant';
import Hero from './components/hero/hero';
import Nav from '@/components/nav/nav';

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Consultant />
      <Offerings />
      <Represent />
      <Compliance />
      <Trust />
      <Process />
      <Partner />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
