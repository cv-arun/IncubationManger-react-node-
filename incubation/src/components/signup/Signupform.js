import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addField,clearField } from '../../redux/signupSlice';
import axios from '../../axios'

function SignupForm() {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const field = useSelector((state) => state.signup.form);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(field)
        
        axios.post('/signup',{field}).then((response)=>{
            console.log(response.data)
            navigate('/login');
            dispatch(clearField())
        })
       
    };
    
    return (
        <Form className='mx-auto mt-5 shadow p-5 rounded' style={{ width: '25rem' }} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email'
                    requiredtype="text" onChange={(e) => dispatch(addField({ key: e.target.name, value: e.target.value }))} />

            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name='fname'
                    onChange={(e) => dispatch(addField({ key: e.target.name, value: e.target.value }))} />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Company Name </Form.Label>
                <Form.Control type="text" placeholder="Enter company name" name='companyName'
                    onChange={(e) => dispatch(addField({ key: e.target.name, value: e.target.value }))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password'
                    onChange={(e) => dispatch(addField({ key: e.target.name, value: e.target.value }))} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="accept terms and condetions" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default SignupForm;