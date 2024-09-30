import React, { useEffect, useState } from 'react';
import './header.css';
import Sidebar from './Sidebar';
import { Avatar } from '@mui/material';

import { Outlet, useNavigate } from 'react-router-dom';

const Header = () => {

 
 



  return (
    <>
      <div className='navbar'>
        <div className='navbar_greyshade'></div>
        <div className='vertical-line'></div>
        <div className='avatar'>
          <Avatar />
        </div>
      </div>

      <div className='flexDiv'>
        <Sidebar />

        <div className='common_section'>
         <Outlet/>
        </div>
      </div>
    </>
  );
};

export default Header;
