import React from "react";
import { Button } from "react-bootstrap";
import { useEffect } from 'react';
import { userLogin, userLogout } from '../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';

function UserHead() {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    !user && navigate('/login');
    useEffect(() => {
        dispatch(userLogin(JSON.parse(localStorage.getItem('user'))))
    }, [])
   
    const logout = () => {
        localStorage.removeItem('user');
        dispatch(userLogout());
        navigate('/login',{replace:true})


    }

    return (
        <div className="d-flex justify-content-between bg-info " style={{ height: '6rem' }}>
            <h1 className="text-white my-auto">User Dashboard</h1>
            <p className="text-white my-auto">welcome {user?user.name:''}</p>
           <Button className="my-auto" variant="primary" onClick={logout}>Logout</Button>
        </div>
    )
}

export default UserHead;