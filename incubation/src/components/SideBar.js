//import useState hook to create menu collapse state
import React, { useState, useEffect } from "react";
import './css/sideBar.css';
import { useNavigate } from 'react-router-dom'

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from "react-pro-sidebar";

//import icons from react icons
import { GiNotebook } from "react-icons/gi";
import { FaPhotoVideo } from "react-icons/fa";
import { RiUserSearchLine } from "react-icons/ri";

import {
    FiHome,
    FiLogOut,
    FiArrowLeftCircle,
    FiArrowRightCircle
} from "react-icons/fi";

import { BiUser } from "react-icons/bi";
import { MdOutlineCalendarViewMonth, MdPayment } from "react-icons/md";


//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";


const SideBar = () => {

    const navigate = useNavigate();
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false);

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    useEffect(() => {
        let token = localStorage.getItem('token');
        !token && navigate('/admin/login');
    }, [])

    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse} className='shadow'>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <p>{menuCollapse ? <img style={{ width: '3rem' }} src="https://in.top10place.com/img_files/1239901936055580" /> : <img style={{ width: '12rem' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVne1gX-CGHTF3pmdgrjSX1kaQDChX90wOQ&usqp=CAU" />}</p>

                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
                        </div>
                    </SidebarHeader>
                    <hr style={{
                        background: 'white',
                        height: '5px',
                    }}
                    />
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiHome />} onClick={e => { navigate('/admin/') }}>
                                Home
                            </MenuItem>
                            <MenuItem icon={<BiUser />} onClick={e => navigate('/admin/application')}>Applicant List</MenuItem>
                            <MenuItem icon={<MdOutlineCalendarViewMonth />} onClick={e => navigate('/admin/record')}>Record Track</MenuItem>
                            <MenuItem icon={<GiNotebook />} onClick={e => navigate('/admin/slot')}>Booking Slot</MenuItem>
                            <MenuItem icon={<RiUserSearchLine />} onClick={e => navigate('/admin/users')}>Users</MenuItem>
                            {/* <MenuItem icon={<FaPhotoVideo />}>Video</MenuItem>
                            <MenuItem icon={<MdPayment />}>Payment</MenuItem> */}
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />} onClick={e => {
                                localStorage.removeItem('token');
                                navigate('/admin/login')
                            }}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default SideBar;
