import React from 'react';
import { footer_contact, footer_services, social_links } from '../../data';
import Logo from '@/components/logo/logo';

const Footer = () => {
  return (
    <footer className='bg-[#030517] px-3 pt-7 md:pt-16 xl:px-0 pb-7 md:pb-14 text-[#cfcfcf] flex justify-center'>
      <div className='max-w[1234px]'>
        <div className='flex md:justify-between gap-12 flex-wrap'>
          <div>
            <Logo />
            <span className='text-[10px]'>
              2025 KeySystem Technology Limited. All rights reserved.
            </span>
          </div>
          <div>
            <h2 className='text-left text-[#BBBBBB] text-3xl font-bold mb-3'>
              SERVICES
            </h2>
            <div className='flex flex-wrap gap-12'>
              <ul className='text-left flex flex-col gap-y-3'>
                {footer_services?.one.map((item, i) => (
                  <li key={i} className='text-xl'>
                    {item}
                  </li>
                ))}
              </ul>
              <ul className='text-left flex flex-col gap-y-3'>
                {footer_services?.two?.map((item, i) => (
                  <li key={i} className='text-xl'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='flex md:justify-start justify-center gap-12 flex-wrap mt-10'>
          <div className='md:max-w-[276px] w-full'>
            <h2 className='text-left text-[#BBBBBB] text-3xl font-bold'>
              QUICK LINKS
            </h2>
            <ul className='flex flex-col gap-y-3 mt-4'>
              <li>
                <a href='#' style={{ color: '#cfcfcf' }}>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' style={{ color: '#cfcfcf' }}>
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-left text-[#BBBBBB] text-3xl font-bold mb-3'>
              CONTACT
            </h2>
            <div className='flex flex-wrap gap-12'>
              {footer_contact?.one.map((item, i) => (
                <div key={i} className='text-left flex flex-col gap-y-2'>
                  <h3 className='text-left text-[#cfcfcf] text-xl font-bold'>
                    {item.header}
                  </h3>
                  <p className='max-w-[340px]'>{item.text}</p>
                </div>
              ))}
            </div>
            <div className='flex flex-wrap flex-col md:flex-row justify-between gap-12 mt-10'>
              {footer_contact?.two.map((item, i) => (
                <div key={i} className='text-left flex flex-col gap-y-2'>
                  <h3 className='text-left text-[#cfcfcf] text-xl font-bold'>
                    {item.header}
                  </h3>
                  <div>
                    <span>Tel: </span>
                    <a href='tel:+' style={{ color: '#cfcfcf' }}>
                      {item.text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex md:justify-start gap-12 flex-wrap mt-10'>
          <div className='flex items-center gap-x-11 md:max-w-[276px] w-full'>
            {social_links.map((Icon, i) => (
              <a key={i} href='#'>
                <Icon />
              </a>
            ))}
          </div>

          <div className='flex flex-wrap gap-x-12'>
            {footer_contact?.three.map((item, i) => (
              <div key={i} className='text-left flex flex-col gap-y-2'>
                <h3 className='text-left text-[#cfcfcf] text-xl font-bold'>
                  {item.header}
                </h3>
                <div>
                  {item?.phone && <span>Tel: </span>}
                  <a
                    href={
                      item.phone ? `tel:+${item.text}` : `mailto:${item.text}`
                    }
                    style={{ color: '#cfcfcf' }}
                  >
                    {item.text}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
