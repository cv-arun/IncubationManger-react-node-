import React from "react";
import { Button } from "react-bootstrap";
import { useEffect } from 'react';
import { userLogin, userLogout } from '../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';

function UserHead() {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    !token && navigate('/login');
    useEffect(() => {
        dispatch(userLogin(JSON.parse(localStorage.getItem('token'))))
    }, [])
   
    const logout = () => {
        localStorage.removeItem('token');
        dispatch(userLogout());
        navigate('/login',{replace:true})


    }

    return (
        <div className="d-flex justify-content-between bg-info " style={{ height: '6rem' }}>
            <h1 className="text-white my-auto">User Dashboard</h1>
           <Button className="my-auto" variant="primary" onClick={logout}>Logout</Button>
        </div>
    )
}

export default UserHead;