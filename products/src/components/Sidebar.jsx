import React from 'react'
import './sidebar.css'
import { Dashboard, Settings ,List,DeliveryDiningSharp,Inventory,AccountBox,BrandingWatermarkSharp,Store,Business,Handshake,People} from "@mui/icons-material"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <p className='admin_ptag'>Admin<hr /></p>

            <a href=""><Dashboard></Dashboard>Dashboard</a><br /><br />
            <a href=""><LocalShippingIcon />Orders</a><br /><br />

            <p className='admin_ptag'>OneRupee<hr /></p>
            <br />
            <a href=""><List />Attributes</a><br /><br />
            <a href="">< DeliveryDiningSharp/>Products</a><br /><br />
            <a href=""><Inventory />Inventory</a><br /><br />
            <a href=""><AccountBox />Account</a><br /><br />
            <a href=""><BrandingWatermarkSharp />Brands</a><br /><br />
            <a href=""><Store />Store</a><br /><br />
            <a href=""><Business/>Marketing</a><br /><br />
            <a href=""><Handshake />User Role</a><br /><br />
            <a href=""><People/>Customers</a><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br />
           




            <a className='settings' href=""><Settings /> Settings</a><br /><br />





        </div>

    )
}

export default Sidebar