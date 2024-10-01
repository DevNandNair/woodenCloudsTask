import React from 'react'
import './sidebar.css'
import { Dashboard, Settings, List, DeliveryDiningSharp, Inventory, AccountBox, BrandingWatermarkSharp, Store, Business, Handshake, People } from "@mui/icons-material"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link, useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const navigate = useNavigate()


    function productList() {
        navigate('/productlist')
    }

    return (
        <div className='sidebar'>
            <p className='admin_ptag'>Admin<hr /></p>

            <Link to="" className="sidebar_links" ><Dashboard />Dashboard</Link><br /><br />
            <Link to="" className="sidebar_links" ><LocalShippingIcon />Orders</Link><br /><br />

            <p className='admin_ptag'>OneRupee<hr /></p>
            <br />
            <Link to="" className="sidebar_links"><List />Attributes</Link><br /><br />
            <Link to="/productlist" className="sidebar_links" ><DeliveryDiningSharp />Products</Link><br /><br />
            <Link to="" className="sidebar_links"><Inventory />Inventory</Link><br /><br />
            <Link to="" className="sidebar_links"><AccountBox />Account</Link><br /><br />
            <Link to="" className="sidebar_links"><BrandingWatermarkSharp />Brands</Link><br /><br />
            <Link to="" className="sidebar_links"><Store />Store</Link><br /><br />
            <Link to="" className="sidebar_links"><Business />Marketing</Link><br /><br />
            <Link to="" className="sidebar_links"><Handshake />User Role</Link><br /><br />
            <Link to="" className="sidebar_links"><People />Customers</Link><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br />





            <a className='settings' href=""><Settings /> Settings</a><br /><br />





        </div>

    )
}

export default Sidebar