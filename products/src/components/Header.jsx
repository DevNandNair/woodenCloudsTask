import React from 'react'
import './header.css'
import Sidebar from './Sidebar'
import ProductList from './ProductList'
import { } from '@mui/icons-material'
import { Avatar } from '@mui/material'


const Header = () => {
    return (
        <>
            <div className='navbar'>
                <div className='navbar_greyshade'></div>
                <div className='vertical-line '></div>
                <div className='avatar'>
                    <Avatar />
                </div>

            </div>
          <div className='flexDiv'>
          <Sidebar />
            <br />


            <div className='common_section'>
                <ProductList />

            </div>

          </div>
        </>
    )
}

export default Header