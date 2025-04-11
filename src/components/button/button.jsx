import React from 'react';

const Button = ({ children, padding, isNav, secondary }) => {
  return (
    <button
      style={{ padding: padding, background: secondary ? 'none' : '' }}
      className={`rounded-4xl! flex gap-4 items-center! border-2! border-solid! border-[#4169E1]! bg-gradient-to-r from-[#000080] via-[#4169e1] to-[#000080] font-bold! ${
        isNav ? 'text-base' : 'text-2xl!'
      } hover:shadow-2xl text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
