import React, { Fragment,useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import axios from "../axios";
import {handleForm} from '../hooks/handleForm'


function ApplicationForm() {

    const [data,setData,clearData]=handleForm({});
    const[pdf,setPdf]=useState('');
    const[image,setImage]=useState('');
    const Data ={...data}
    const formData=new FormData();
    formData.append("pdf",pdf)
    
    console.log(pdf)
    console.log(image)
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(data)
       
        axios.post('/application',Data).then((response)=>{
            console.log(response.data);
            clearData();

        })
    }
    return (
        <Fragment>
            <Form  onSubmit={handleSubmit}>
                <Row className="mt-5 border border-info m-5 p-5" >
                    <h3 className="text-center mb-5">Application form</h3>
                    <Col sm md={3}>
                        <Form.Group className="mb-3" controlId="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="Name" onChange={(e)=>setData(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address" name="Address" onChange={(e)=>setData(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="City">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter City" name="City" onChange={(e)=>setData(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="State">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="Enter State" name="State" onChange={(e)=>setData(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="Email" onChange={(e)=>setData(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Phone">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone number" name="Phone" onChange={(e)=>setData(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Company">
                            <Form.Label>Company name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Company" name="Company" onChange={(e)=>setData(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="logo">
                            <Form.Label>Company logo</Form.Label>
                            <Form.Control type="file" placeholder="upload logo" onChange={(e)=>setImage(e.target.files[0])}/>
                        </Form.Group>



                    </Col>
                    <Col sm md={4} >
                        <Form.Group className="mb-3" controlId="1">
                            <Form.Label>Describe your team and Background</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field9" onChange={(e)=>setData(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="3">
                            <Form.Label>Describe your company and product</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field10" onChange={(e)=>setData(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="4">
                            <Form.Label>Describe the problem you are trying to solve</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field11" onChange={(e)=>setData(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="5">
                            <Form.Label>What is unique about your solution</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field12" onChange={(e)=>setData(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="6">
                            <Form.Label>What is your value preposition for the costomer</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field13" onChange={(e)=>setData(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="7">
                            <Form.Label>Who are your competitor and what is your competative advantages?</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field14" onChange={(e)=>setData(e)}/>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="8">
                            <Form.Label>Explain your revenue model</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field15" onChange={(e)=>setData(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="8">
                            <Form.Label>What is the potential market size of the product?</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field16" onChange={(e)=>setData(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="9">
                            <Form.Label>How do you market or plan to market Your product and services</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field17" onChange={(e)=>setData(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="8">
                            <Form.Label>Type of incubation you need</Form.Label>
                            <Form.Check name="IncubationType" type='radio' label='Physical incubation' value={'Physical'}  onChange={(e)=>setData(e)}/>
                            <Form.Check name="IncubationType" type='radio' label='Virtual incubation'  value={'Virtual'}  onChange={(e)=>setData(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="9">
                            <Form.Label>upload a detailed business proposel</Form.Label>
                            <Form.Control type='file' placeholder="" name="field18" onChange={(e)=>setPdf(e.target.files[0])}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>

                </Row>
            </Form>
        </Fragment>
    )
}

export default ApplicationForm;