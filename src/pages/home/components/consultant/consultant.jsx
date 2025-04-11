import React from 'react';
import ContentLayout from '../content-layout/contentlayout';
import Title from '@/components/title/title';
import Image from '@/components/Image/image';

const Consultant = () => {
  return (
    <ContentLayout
      children={
        <div className='flex flex-col items-center'>
          <Title
            header={'Why we are  your Trusted Consultant'}
            subTitle={'Empowering Businesses with Cutting-edge Technology'}
          />
          <p className='text-3xl text-[#D2D2D2] text-center my-8 max-w-[1020px]'>
            Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
            excellence is the driving force behind our success. Excellence is
            our legacy, and we are proud to carry it forward.
          </p>
          <div className='max-w-[1070px]'>
            <p className='text-2xl text-[#D2D2D2] text-center mb-5 mt-16'>
              Watch the video to see how we are innovating to keep businesses on
              top of their games.
            </p>
            <Image
              highResSrc={'https://i.postimg.cc/NFf8bZhm/Image-1.png'}
              lowResSrc={'https://i.postimg.cc/hPZsZ4tj/Image.png'}
              alt='consultant'
            />
          </div>
        </div>
      }
    ></ContentLayout>
  );
};

export default Consultant;
