import React from "react";
import { useEffect } from 'react';
import { userLogin, userLogout } from '../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { BiUserCircle } from "react-icons/bi";


function UserHead() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    !token && navigate('/login');
    useEffect(() => {
        dispatch(userLogin(JSON.parse(localStorage.getItem('token'))))
    }, [token])
   

    const logout = () => {
        localStorage.removeItem('token');
        dispatch(userLogout());
        navigate('/login', { replace: true })
    }

    return (
        <div className="d-flex justify-content-between bg-info " style={{ height: '6rem' }}>
            <h1 onClick={() => navigate('/')} className="text-white my-auto">User Dashboard</h1>
            <div className="text-white my-auto">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" >
                        <BiUserCircle />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/">Home</Dropdown.Item>
                        <Dropdown.Item href="/status">Application Status</Dropdown.Item>
                        <Dropdown.Item onClick={logout} >Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>


            </div>
        </div>
    )
}

export default UserHead;