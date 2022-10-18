import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from '../axios';
import { handleForm } from '../hooks/handleForm';
import { setValue } from '../redux/tempSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Addnewuser(props) {
    const [message, setMessage] = useState('')
    const [show, setShow] = useState(false);

    const [fname, setFname] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [id, setId] = useState('')
    const [data, setData, clearData] = handleForm({});
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        return setShow(true)
    }
    let stateValues = { fname, email, companyName: company, id }
    let field = props.add ? data : stateValues;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let url = props.add ? '/signup' : '/admin/editUser '
    const handleSubmit = () => {

        if (fname && email && company) {
            axios.post(`${url}`, { field }).then((response) => {
                console.log(response.data.response)
                clearData()
                dispatch(setValue(response.data.response))
                response.data.response && setMessage(response.data.response.msg)
                response.data.response && !response.data.response.msg && setShow(false)
                navigate(0)

            })

        } else {
            setMessage('All fields are Required')
        }
    }
    useEffect(() => {
        setFname(props.fname)
        setEmail(props.email)
        setCompany(props.company)
        setId(props.id)
    }, [])



    return (
        <>
            <Button style={{ width: '7rem' }} onClick={handleShow} >
                {props.add ? 'Add new user' : `Edit`}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.add ? 'Add new user' : 'Edit user data'}</Modal.Title>


                </Modal.Header>
                <Modal.Body>

                    <Form className='mx-auto mt-5 ' style={{ width: '25rem' }}>
                        {message && <Form.Label style={{ color: 'red' }}>{message}</Form.Label>}
                        <Form.Group className="mb-3" controlId="formBasicEmail1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" value={email} onChange={e => { setData(e); setEmail(e.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail2">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='fname' placeholder="Enter name" value={fname} onChange={e => { setData(e); setFname(e.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail3">
                            <Form.Label>company name</Form.Label>
                            <Form.Control type="text" name='companyName' placeholder="Enter company name" value={company} onChange={e => { setData(e); setCompany(e.target.value) }} />
                        </Form.Group>

                        {props.add && <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" onChange={e => setData(e)} />
                        </Form.Group>}


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Addnewuser;
