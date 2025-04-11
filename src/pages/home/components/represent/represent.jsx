import React from 'react';
import ContentLayout from '../content-layout/contentlayout';
import Title from '@/components/title/title';
import Image from '@/components/Image/image';
import { represent_card } from '../../data';

const Represent = () => {
  return (
    <ContentLayout
      isPrimary
      children={
        <div className='flex flex-col items-center'>
          <Title
            header={'What we Represent'}
            subTitle={
              'Our relentless pursuit of excellence is the driving force behind our success'
            }
          />
          <p className='text-2xl text-[#D2D2D2] text-center max-w-[1070px] my-2'>
            Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
            excellence is the driving force behind our success. Excellence is
            our legacy, and we are proud to carry it forward. Watch the video to
            see how we are innovating to keep businesses on top of their games.
          </p>
          <div className='gap-5 flex flex-wrap mt-22'>
            {represent_card.map((card, i) => (
              <div
                key={i}
                className='flex flex-col bg-gradient-to-tr from-[#030517] via-[#00005] to-[#111A89] max-w-[605px] p-5 shadow-[#01B4DE] border rounded-md'
              >
                <div className='self-center'>
                  <Image
                    lowResSrc={card.high_res_url}
                    highResSrc={card.high_res_url}
                    alt={card.title}
                    style={{ maxHeight: '429px', width: 'auto' }}
                  />
                </div>
                <h3 className='font-bold text-5xl text-white mt-5'>
                  {card.title}
                </h3>
                <p className='text-lg text-[#bbbbbb] mt-4'>{card.subTitle}</p>
              </div>
            ))}
          </div>
        </div>
      }
    ></ContentLayout>
  );
};

export default Represent;
