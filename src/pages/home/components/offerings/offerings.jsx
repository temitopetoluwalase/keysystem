import React from 'react';
import ContentLayout from '../content-layout/contentlayout';
import Title from '@/components/title/title';

const Offerings = () => {
  return (
    <ContentLayout
      children={
        <>
          <Title
            header={'Our Offerings'}
            subTitle={
              'Leverage KeySystem’s cutting-edge expertise to transform your business. Our tailored software and cybersecurity solutions drive efficiency, security, and growth. We empower businesses to thrive in the digital age'
            }
            btnText={'Learn More'}
          />
        </>
      }
    ></ContentLayout>
  );
};

export default Offerings;
