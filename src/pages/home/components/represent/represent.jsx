import React from 'react';
import ContentLayout from '../content-layout/contentlayout';
import Title from '@/components/title/title';

const Represent = () => {
  return (
    <ContentLayout
      isPrimary
      children={
        <>
          <Title
            header={'What we Represent'}
            subTitle={
              'Our relentless pursuit of excellence is the driving force behind our success'
            }
          />
          <p>
            Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
            excellence is the driving force behind our success. Excellence is
            our legacy, and we are proud to carry it forward. Watch the video to
            see how we are innovating to keep businesses on top of their games.
          </p>
        </>
      }
    ></ContentLayout>
  );
};

export default Represent;
