import React from 'react';
import ContentLayout from '../content-layout/contentlayout';
import Title from '@/components/title/title';
import Arrow from '@/assets/icons/arrow.svg?react';

const Offerings = () => {
  const Pills = ({ label, bg }) => {
    return (
      <div
        style={{ boxShadow: '0 -2px 0px -1px #DCAEC2' }}
        className={`flex flex-col gap-1 rounded-[8093px] items-center justify-center bg-gradient-to-b ${bg} w-[297.5px] h-[135px] border shadow-[#DCAEC2]`}
      >
        <p className='w-[240px] text-white text-center text-2xl'>{label}</p>
        <Arrow />
      </div>
    );
  };

  const first_row = [
    {
      label: 'Core banking services',
      bg: 'from-[#0A3440E3] via-[#05071EA6] to-[#05071EA6]',
    },
    {
      label: 'Staff augmentation solutions',
      bg: 'from-[#0D400AE3] via-[#05071EA6] to-[#05071EA6]',
    },
    {
      label: 'Business Intelligence',
      bg: 'from-[#400A0AE3] via-[#05071EA6] to-[#05071EA6]',
    },
  ];
  const second_row = [
    {
      label: 'Digital Banking & financial inclusion',
      bg: 'from-[#0A0E40E3] via-[#05071EA6] to-[#05071EA6]',
    },
    {
      label: 'Internal audit solutions',
      bg: 'from-[#40330AE3] via-[#05071EA6] to-[#05071EA6]',
    },
    {
      label: 'KeySystem software testing',
      bg: 'from-[#3CA3BAE3] via-[#05071EA6] to-[#05071EA6]',
    },
  ];
  const third_row = [
    {
      label: 'Online/mobile lending solution',
      bg: 'from-[#400A3AE3] via-[#05071EA6] to-[#05071EA6]',
    },
    {
      label: 'Data Warehouse',
      bg: 'from-[#4A8C2BE3] via-[#05071EA6] to-[#05071EA6]',
    },
    {
      label: 'Cybersecurity Solutions',
      bg: 'from-[#6012CEB8] via-[#05071EA6] to-[#05071EA6]',
    },
  ];

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
          <div className='flex justify-between flex-wrap gap-12 mt-15 md:mt-2'>
            <div className='flex flex-col gap-12'>
              {first_row.map((data, i) => (
                <Pills key={i} label={data.label} bg={data.bg} />
              ))}
            </div>
            <div className='flex flex-col gap-12 md:mt-18'>
              {second_row.map((data, i) => (
                <Pills key={i} label={data.label} bg={data.bg} />
              ))}
            </div>
            <div className='flex flex-col gap-12'>
              {third_row.map((data, i) => (
                <Pills key={i} label={data.label} bg={data.bg} />
              ))}
            </div>
          </div>
        </>
      }
    ></ContentLayout>
  );
};

export default Offerings;
