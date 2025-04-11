import React from 'react';
import ContentLayout from '../content-layout/contentlayout';
import Title from '@/components/title/title';

const Consultant = () => {
  return (
    <ContentLayout
      children={
        <>
          <Title
            header={'Why we are  your Trusted Consultant'}
            subTitle={'Empowering Businesses with Cutting-edge Technology'}
          />
        </>
      }
    ></ContentLayout>
  );
};

export default Consultant;
