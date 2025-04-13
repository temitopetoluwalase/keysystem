import React from 'react';

const ContentLayout = ({ isPrimary, children, noBg }) => {
  return (
    <div
      className='flex justify-center py-10 px-2'
      style={{
        background: noBg ? '' : isPrimary ? '#03020a' : '#000015',
      }}
    >
      <div className='max-w-[1234px] w-full'>{children}</div>
    </div>
  );
};

export default ContentLayout;
