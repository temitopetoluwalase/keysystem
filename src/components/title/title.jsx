import React from 'react';
import Button from '../button/button';

const Title = ({ header, subTitle, btnText, noMargin }) => {
  return (
    <div className='max-w-[1234px] w-full'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-5xl text-white text-center font-bold mt-20 mb-8 max-w-[930px]'>
          {header}
        </h2>
        <p
          className={`text-2xl max-w-[750px] text-white text-center ${
            noMargin ? '' : btnText ? 'mb-8' : 'mb-10'
          }`}
        >
          {subTitle}
        </p>
        {btnText && <Button padding={'16px 32px'}>{btnText}</Button>}
      </div>
    </div>
  );
};

export default Title;
