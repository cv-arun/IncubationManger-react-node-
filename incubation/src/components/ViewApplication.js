import React, { Fragment, useState, useEffect } from "react";

import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import axios from "../axios";
import { useSelector } from 'react-redux';



function ViewApplicationForm() {

    const [data, setData] = useState({});
    const applicationId = useSelector(state => state.temp.value);
    console.log(applicationId, 'appid')
    useEffect(() => {
        axios.post('/admin/getApplicationData', { id: applicationId }).then((response) => {
          
            setData(response.data)


        })
    }, [])


    return (
        <Fragment>

            <Form>
                <Row className="mt-5 border border-info m-5 p-5" >
                    <h3 className="text-center mb-5">Application form</h3>
                    <Col sm md={3}>
                        <Form.Group className="mb-3" controlId="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="Name" value={data.Name?data.Name:''} disabled={true} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address" name="Address" value={data.Address?data.Address:''} disabled={true} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="City">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter City" name="City" value={data.Company?data.Company:''} disabled={true} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="State">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="Enter State" name="State" value={data.City?data.City:''} disabled={true} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="Email" value={data.Email?data.Email:''} disabled={true} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Phone">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone number" name="Phone" value={data.Phone?data.Phone:''} disabled={true} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Company">
                            <Form.Label>Company name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Company" name="Company" value={data.Company?data.Company:''} disabled={true} />
                        </Form.Group>




                    </Col>
                    <Col sm md={4} >
                        <Form.Group className="mb-3" controlId="1">
                            <Form.Label>Describe your team and Background</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="companyDetails" value={data.companyDetails?data.companyDetails:''} disabled={true} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="3">
                            <Form.Label>Describe your company and product</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field10" value={data.field10?data.field10:''} disabled={true} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="4">
                            <Form.Label>Describe the problem you are trying to solve</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field11" value={data.field11?data.field11:''} disabled={true} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="5">
                            <Form.Label>What is unique about your solution</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field12" value={data.field12?data.field12:''} disabled={true} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="6">
                            <Form.Label>What is your value preposition for the costomer</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field13" value={data.field13?data.field13:''} disabled={true} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="7">
                            <Form.Label>Who are your competitor and what is your competative advantages?</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field14" value={data.field14?data.field14:''} disabled={true} />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="8">
                            <Form.Label>Explain your revenue model</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field15" value={data.field15?data.field15:''} disabled={true} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="8">
                            <Form.Label>What is the potential market size of the product?</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field16" value={data.field16?data.field16:''} disabled={true} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="9">
                            <Form.Label>How do you market or plan to market Your product and services</Form.Label>
                            <Form.Control as='textarea' placeholder="" name="field17" value={data.field17?data.field17:''} disabled={true} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="8">
                            <Form.Label>Type of incubation you need</Form.Label>
                           {data.IncubationType && <Form.Check name="IncubationType" type='radio' label='Physical incubation'   disabled={true} checked/>}
                            {data.IncubationType &&<Form.Check name="IncubationType" type='radio' label='Virtual incubation'  disabled={true} checked/>}
                        </Form.Group>

                       
                    </Col>

                </Row>
            </Form>
        </Fragment>
    )
}

export default ViewApplicationForm;