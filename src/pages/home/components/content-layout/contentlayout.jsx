import React from 'react';

const ContentLayout = ({ isPrimary, children }) => {
  return (
    <div
      className='flex justify-center py-10'
      style={{
        background: isPrimary ? '#03020a' : '#020106',
      }}
    >
      <div className='max-w-[1234px] w-full'>{children}</div>
    </div>
  );
};

export default ContentLayout;
