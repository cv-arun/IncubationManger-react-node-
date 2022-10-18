import React, { Fragment, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import axios from "../axios";
import { handleForm } from '../hooks/handleForm';
import { useNavigate } from 'react-router-dom';



function ApplicationForm() {

    const [data, setData, clearData] = handleForm({});
    const [message, setMessage] = useState('');
    const [alreadySubmitted, setAlreadySubmitted] = useState('');

    const navigate = useNavigate();

    const Data = { ...data }

    function handleSubmit(e) {
        e.preventDefault();

        let token = JSON.parse(localStorage.getItem('token'))
        axios.post('/application', Data, {
            headers: {
                'x-access-token': `${token}`
            }
        }).then((response) => {
            console.log(response.data.response._id)
            response.data && response.data.response._id ? setMessage(response.data.response._id) : setMessage('');
            clearData();
            navigate(0)

        }).catch((err) => {
            err.response.data.message && navigate('/login')
        })
    }


    useEffect(() => {
        let token = JSON.parse(localStorage.getItem('token'))
        axios.get(`/applicationStatus`, {
            headers: {
                'x-access-token': `${token}`
            }
        }).then(data => {
            console.log(data.data.applicationData.length)
            data.data.applicationData.length != 0 ? setAlreadySubmitted('true') : setAlreadySubmitted('false');

        })
    }, [])





    return (
        <Fragment>
            {message && <h6 className="text-center mt-5 text-success">your application submitted successfully</h6>}
            {alreadySubmitted == 'false' ? <Form onSubmit={handleSubmit} class="g-3  needs-validation" >
                <Row className="mt-5 border border-info m-5 p-5" >
                    <h3 className="text-center mb-5">Application form</h3>
                    <Col sm md={3}>
                        <Form.Group className="mb-3" controlId="Name">
                            <Form.Label onMouseEnter={() => navigate(0)}>Name</Form.Label>
                            <Form.Control className="form-control" type="text" placeholder="Enter name" name="Name" onChange={(e) => setData(e)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address" name="Address" onChange={(e) => setData(e)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="City">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter City" name="City" onChange={(e) => setData(e)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="State">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="Enter State" name="State" onChange={(e) => setData(e)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="Email" onChange={(e) => setData(e)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Phone">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone number" name="Phone" onChange={(e) => setData(e)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Company">
                            <Form.Label>Company name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Company" name="Company" onChange={(e) => setData(e)} required />
                        </Form.Group>




                    </Col>
                    <Col sm md={4} >
                        <Form.Group className="mb-3" controlId="1">
                            <Form.Label>Describe your team and Background</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="companyDetails" onChange={(e) => setData(e)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="3">
                            <Form.Label>Describe your company and product</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field10" onChange={(e) => setData(e)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="4">
                            <Form.Label>Describe the problem you are trying to solve</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field11" onChange={(e) => setData(e)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="5">
                            <Form.Label>What is unique about your solution</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field12" onChange={(e) => setData(e)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="6">
                            <Form.Label>What is your value preposition for the costomer</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field13" onChange={(e) => setData(e)} required />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="7">
                            <Form.Label>Who are your competitor and what is your competative advantages?</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field14" onChange={(e) => setData(e)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="8">
                            <Form.Label>Explain your revenue model</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field15" onChange={(e) => setData(e)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="8">
                            <Form.Label>What is the potential market size of the product?</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field16" onChange={(e) => setData(e)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="9">
                            <Form.Label>How do you market or plan to market Your product and services</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field17" onChange={(e) => setData(e)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="8">
                            <Form.Label>Type of incubation you need</Form.Label>
                            <Form.Check name="IncubationType" type='radio' label='Physical incubation' value={'Physical'} onChange={(e) => setData(e)} checked />
                            <Form.Check name="IncubationType" type='radio' label='Virtual incubation' value={'Virtual'} onChange={(e) => setData(e)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>

                </Row>
            </Form> :
                <div style={{ width: '95vw', height: '90vh' }} className='d-flex flex-column justify-content-center '>
                    <div className="d-flex  justify-content-center">
                        <Button style={{ width: '15rem' }} onClick={() => { navigate('/status') }}>View Application status</Button>
                    </div>
                </div>}
        </Fragment>
    )
}

export default ApplicationForm;