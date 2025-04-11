import React from 'react';
import ContentLayout from '../content-layout/contentlayout';
import Button from '@/components/button/button';
import Image from '@/components/Image/image';

const Hero = () => {
  return (
    <div className='bg-gradient-to-r from-[#05071E] via-[#000040] to-[#111A89]!'>
      <ContentLayout noBg>
        <div className='flex flex-col items-center'>
          <div className='bg-[#2E6D9C] p-3 md:text-xl text-white rounded-4xl mb-5'>
            Welcome to KeySystem
          </div>
          <h1 className='font-bold md:text-[80px] text-white max-w-[500px] text-center mb-3'>
            IT Consulting for Forward-thinking Businesses
          </h1>
          <p className='text-white md:text-3xl mb-14'>
            Driving Digital Transformation, One Solution at a Time
          </p>
          <div className='flex md:gap-7 gap-2 flex-col md:flex-row'>
            <Button>Get Started</Button>
            <Button secondary>Learn More</Button>
          </div>
        </div>
      </ContentLayout>

      <div className='relative hidden md:flex mt-14 overflow-hidden justify-center pb-16'>
        <div className='absolute w-full top-15'>
          <Image
            highResSrc={'https://i.postimg.cc/xC8hNNXv/Vector-1-Stroke.png'}
            lowResSrc={'@/assets/images/hero-vector.png'}
            alt='hero-img'
          />
        </div>
        <div className='max-w-[970px]'>
          <Image
            highResSrc={'https://i.postimg.cc/k4HZQMSk/Rectangle-2.png'}
            lowResSrc={'@/assets/images/hero.png'}
            alt='hero-img'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
