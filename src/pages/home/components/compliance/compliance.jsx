import React from 'react';
import ContentLayout from '../content-layout/contentlayout';
import Title from '@/components/title/title';
import { compliance_logos } from '../../data';

const Compliance = () => {
  return (
    <ContentLayout
      children={
        <>
          <Title
            header={'Compliance Certifications / Standards We Specialize In'}
            subTitle={
              "Elevate Your Organization's Security Posture with Our Compliance / Standards Consulting Services"
            }
            btnText={'Contact Us'}
          />
          <div className='bg-white rounded-lg flex flex-wrap justify-between gap-y-5 gap-x-10 items-center p-4 mt-20'>
            {compliance_logos.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt={img.alt}
                style={{
                  maxWidth: '301px',
                  height: '110px',
                  width: 'fit-content',
                }}
              />
            ))}
          </div>
        </>
      }
    ></ContentLayout>
  );
};

export default Compliance;
