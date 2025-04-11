import React from 'react';
import ContentLayout from '../content-layout/contentlayout';
import Title from '@/components/title/title';
import { trust_logos } from '../../data';

const Trust = () => {
  return (
    <ContentLayout
      isPrimary
      children={
        <>
          <Title header={'They Trust Us'} subTitle={'And so can you'} />
          <div className='flex flex-wrap justify-center gap-10 mt-20 items-center max-w-[1234px] w-full'>
            {trust_logos.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt={img.alt}
                style={{
                  maxWidth: '230px',
                  height: 'fit-content',
                  width: 'auto',
                  background: '#060410',
                }}
              />
            ))}
          </div>
        </>
      }
    ></ContentLayout>
  );
};

export default Trust;
