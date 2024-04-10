import React from 'react';
import Logo from '../assets/logo.webp';
import Image from '../assets/images.png';

const Navbar = () => {
  return (
    <div>
      <div className="font-sans flex  justify-between m-1 sm:m-3">
        <div className='w-7 h-7 sm:w-12 sm:h-12 mx-1 sm:mx-6 md:mx-56'>
          <img src={Logo}  alt="" />
        </div>
        <div className='mx-1  sm:mx-6 md:mx-56 text-[10px] sm:text-sm'>
          <ul className='list-none flex  text-slate-600 gap-1 sm:gap-4'>
            <li className="">Home</li>
            <li className="">Availability</li>
            <li className="">Integrations</li>
            <li className="">Help<select className=' bg-transparent bg-no-repeat bg-right ' name="" id=""></select></li>
            <li className=" h-4 w-4 sm:h-8 sm:w-8"><img src={Image}  alt="" /></li>
            <li className="">Account <select name="" id=""></select></li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
