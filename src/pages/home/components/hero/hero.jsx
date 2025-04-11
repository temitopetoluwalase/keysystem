import React from 'react';
import ContentLayout from '../content-layout/contentlayout';
import Button from '@/components/button/button';

const Hero = () => {
  return (
    <div>
      <ContentLayout>
        <div className='flex flex-col items-center'>
          <div>Welcome to KeySystem</div>
          <h1>IT Consulting for Forward-thinking Businesses</h1>
          <p>Driving Digital Transformation, One Solution at a Time</p>
          <div className='flex gap-7'>
            <Button>Get Started</Button>
            <Button secondary>Learn More</Button>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};

export default Hero;
