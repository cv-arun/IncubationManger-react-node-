import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import  {useNavigate} from 'react-router-dom'


function AdminHeader() {
const navigate=useNavigate();
    return (
        <Fragment>
            <div>
                <Navbar bg="light">
                    <Container>
                        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                        <Button onClick={()=>navigate(-1)}>back</Button>
                    </Container>
                </Navbar>
            </div>
        </Fragment>
    )
}

export default AdminHeader