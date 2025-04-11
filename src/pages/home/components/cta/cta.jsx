import CTASVG1 from '@/assets/icons/cta-card.svg?react';

const CTA = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-[#000040] via-[#030517] to-[#030517] flex items-center justify-center px-4'>
      <div className='relative my-40 max-w-[1234px] w-full sm:bg-[#0D0F22] text-white rounded-2xl py-10 sm:p-10 md:p-18 overflow-hidden'>
        {/* Gradient Decoration */}
        <div className='absolute right-0 top-0 h-full w-1/3 d-none sm:d-block rounded-r-2xl pointer-events-none'>
          <CTASVG1 style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Content */}
        <h2 className='text-3xl md:text-6xl font-bold mb-3'>
          Ready to get started?
        </h2>
        <p className='text-xl text-gray-400 mb-4'>Shoot us a Mail</p>

        <p className='text-2xl text-gray-200 mb-7 relative z-[1px] max-w-[854px]'>
          Join numerous corporations, organizations, and businesses as they
          scale their teams, tap into new market opportunities and build
          innovative products with KeySystem Technology.
        </p>
        <p className='text-2xl text-gray-200 mb-6 relative z-[1px] max-w-[854px]'>
          Join thousands of students who are ready to learn new skills or take
          their career to the next level by enrolling in one of our training
          programs today.
        </p>
        <button className='px-8 py-3 rounded-full bg-gradient-to-r from-[#0f5ef7] to-[#1e3afc] text-white font-semibold text-base shadow-[0_0_20px_rgba(56,129,255,0.5)] transition-transform hover:scale-105'>
          Send Us a Mail Now
        </button>
      </div>
    </div>
  );
};

export default CTA;
