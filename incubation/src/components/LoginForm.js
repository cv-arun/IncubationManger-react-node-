import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from '../axios';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { loginField,clearField } from '../redux/loginSlice';
import { userLogin } from '../redux/userSlice';


function LoginForm(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const field = useSelector((state) => state.login.form);
  const [message,setMessage]=useState('')
  function handleSubmit(e) {
  
    e.preventDefault();
    
    axios.post('/login', { field }).then((response) => {
     
      if (response && response.data.token) {
        console.log(response.data.token)
        localStorage.setItem('token', JSON.stringify(response.data.token));
        dispatch(userLogin(response.data.token))
        navigate('/')
        dispatch(clearField())
      }
      else {
       response && setMessage(response.data.msg);
      }
    })

  }
 

  console.log(field);
  return (
    <Form className='mx-auto mt-5 shadow p-5 rounded' style={{ width: '25rem' }} onSubmit={handleSubmit}>
      <h1 className='text-center'>{props.title} Login</h1>
      {message&&<Form.Label style={{color:'red'}}>Invalid credential</Form.Label>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'
          onChange={(e) => dispatch(loginField({ key: e.target.name, value: e.target.value }))} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'
          onChange={(e) => dispatch(loginField({ key: e.target.name, value: e.target.value }))} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Form.Label> Don't have an account? </Form.Label>
            <Link to='/signup'>Signup</Link>
            
    </Form>
  );
}

export default LoginForm;