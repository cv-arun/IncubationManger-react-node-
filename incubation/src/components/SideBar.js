//import useState hook to create menu collapse state
import React, { useState,useEffect } from "react";
import './css/sideBar.css';
import {useNavigate} from 'react-router-dom'

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
import { GiNotebook} from "react-icons/gi";
import { FaPhotoVideo} from "react-icons/fa";

import {
    FiHome,
    FiLogOut,
    FiArrowLeftCircle,
    FiArrowRightCircle
} from "react-icons/fi";
import { GoCalendar } from "react-icons/go";
import { BiUser} from "react-icons/bi";
import { MdOutlineCalendarViewMonth,MdPayment} from "react-icons/md";


//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";


const SideBar = () => {
   
    const navigate=useNavigate();
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false);

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    useEffect(()=>{
        let token=localStorage.getItem('token');
        !token && navigate('login');
    })

    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse} className='shadow'>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
                        </div>
                    </SidebarHeader>
                    <hr style={{background: 'white',
                            height: '5px',
                        }}
                    />
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />} >
                                Home
                            </MenuItem>
                            <MenuItem icon={<BiUser />}>Applicant List</MenuItem>
                            <MenuItem icon={<MdOutlineCalendarViewMonth />}>Record Track</MenuItem>
                            <MenuItem icon={<GiNotebook />}>Booking Slot</MenuItem>
                            <MenuItem icon={<GoCalendar />}>Schedule events</MenuItem>
                            <MenuItem icon={<FaPhotoVideo />}>Video</MenuItem>
                            <MenuItem icon={<MdPayment />}>Payment</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />} onClick={e=>{
                                localStorage.removeItem('token');
                                navigate('login')}}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default SideBar;
