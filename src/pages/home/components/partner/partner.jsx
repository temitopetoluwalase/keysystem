import React from 'react';
import { partner_logos } from '../../data';
import Title from '@/components/title/title';

const Partner = () => {
  return (
    <>
      <div className='flex justify-center bg-[#03020a] py-10'>
        <Title
          header={'Our Partners'}
          subTitle={'Creating a Synergy with global brands'}
        />
      </div>

      <div className='bg-[#050619] flex justify-center py-12'>
        <div className='flex md:h-[91px] flex-wrap justify-center gap-10 items-center max-w-[1234px] w-full'>
          {partner_logos.map((img, i) => (
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
      </div>
    </>
  );
};

export default Partner;
