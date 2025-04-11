import React, { useState } from 'react';

const Image = ({ lowResSrc, highResSrc, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className='relative w-full'>
      {/* Low-res blurred image */}
      <img
        src={lowResSrc}
        alt={alt}
        className={`absolute top-0 left-0 w-full blur-md scale-105 transition-opacity duration-500 ${
          loaded ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* High-res image */}
      <img
        src={highResSrc}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default Image;
