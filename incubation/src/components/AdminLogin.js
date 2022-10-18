import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { handleForm } from '../hooks/handleForm';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';



function AdminLogin(props) {
  const [data, setData, clearData] = handleForm({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  function hadleSubmit(e) {
    e.preventDefault();
    axios.post('/admin/login', data).then((response) => {
      if (response.data.data && response.data.data.token) {
        localStorage.setItem('token', JSON.stringify(response.data.data.token));
        console.log('logged in')
        navigate('/admin');
        clearData()
      } else {
        response.data && setMessage(response.data.msg);
      }
    })
  }
  useEffect(() => {
    
    return  window.onhashchange = function () {
      navigate(1)
      console.log('back')
    }
  }, [])
 
  return (
    <Form className='mx-auto mt-5 shadow p-5 rounded' style={{ width: '25rem' }} onClick={hadleSubmit}>
      <h1 className='text-center'>{props.title} Login</h1>
      {message && <Form.Label style={{ color: 'red' }}>Invalid credential</Form.Label>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" onChange={e => setData(e)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" onChange={e => setData(e)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default AdminLogin;