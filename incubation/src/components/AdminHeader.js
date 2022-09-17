import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function AdminHeader() {

    return (
        <Fragment>
            <div>
                <Navbar bg="light">
                    <Container>
                        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        </Fragment>
    )
}

export default AdminHeader