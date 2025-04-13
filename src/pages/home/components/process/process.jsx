import React from 'react';
import ContentLayout from '../content-layout/contentlayout';
import Title from '@/components/title/title';
import Image from '@/components/Image/image';
import { process_card } from '../../data';

const Process = () => {
  const Card = ({
    title,
    content,
    low_res_icon,
    high_res_icon,
    img_max_height,
    min_height,
    max_content_width,
  }) => {
    return (
      <div
        style={{ minHeight: min_height ?? '302px' }}
        className='w-full relative rounded-md flex justify-between p-7 bg-gradient-to-r from-[#04050B] via-[#04050B] to-[#181B4D]'
      >
        <div
          className='w-[500px] lg:w-full'
          style={{ maxWidth: max_content_width }}
        >
          <h3 className='text-[40px] text-white font-bold'>{title}</h3>
          <p className='text-2xl text-white mt-4'>{content}</p>
        </div>
        <div className='absolute bottom-0 right-0 hidden sm:block'>
          <Image
            lowResSrc={low_res_icon}
            highResSrc={high_res_icon}
            alt={title}
            style={{ maxHeight: img_max_height }}
          />
        </div>
      </div>
    );
  };
  return (
    <ContentLayout isPrimary>
      <Title
        header={'Our Process'}
        subTitle={' At KeySystem, we leave you with a lasting impression'}
      />
      <div>
        <Card
          title={process_card[0].title}
          content={process_card[0].content}
          low_res_icon={process_card[0].low_res_url}
          high_res_icon={process_card[0].high_res_url}
          img_max_height={process_card[0].img_max_height}
          min_height={process_card[0].min_height}
          max_content_width={process_card[0].max_content_width}
        />
      </div>
      <div className='xl:grid grid-cols-2 flex justify-between flex-wrap gap-10 mt-10'>
        {process_card
          .filter((_, i) => i > 0)
          .map((item, i) => (
            <Card
              key={i}
              title={item.title}
              content={item.content}
              low_res_icon={item.low_res_url}
              high_res_icon={item.high_res_url}
              img_max_height={item.img_max_height}
              max_content_width={item.max_content_width}
            />
          ))}
      </div>
    </ContentLayout>
  );
};

export default Process;
