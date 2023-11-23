//Header
import React from 'react';
//Light
import ImageMobileLight from '../images/bg-mobile-light.jpg';
import ImageDesktopLight from '../images/bg-desktop-light.jpg';
//Dark
import ImageMobileDark from '../images/bg-mobile-dark.jpg';
import ImageDesktopDark from '../images/bg-desktop-dark.jpg';

export default function Header(props) {
  return (
    <div className='relative'>
      <img
        src={props.darkMode ? ImageMobileDark : ImageMobileLight}
        alt='Header Image'
        className='w-full h-60 md:hidden'
      />
      <img
        src={props.darkMode ? ImageDesktopDark : ImageDesktopLight}
        alt='Header Image'
        className='hidden md:block w-full h-60'
      />
    </div>
  );
}
