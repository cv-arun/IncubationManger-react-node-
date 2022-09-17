import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select'

function MyModal(props) {
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const handleSubmit = () => {
        console.log(selectedOption);
        console.log(props.id);
        setShow(false)
    }
    return (
        <>
            <Button style={{ width: 90, height: 90, backgroundColor: "orange" }} onClick={handleShow}>

            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose company</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}

                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default MyModal;
