import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import axios from '../axios'
import { useSelector, useDispatch } from 'react-redux';
import { setValue } from '../redux/tempSlice';


function MyModal(props) {
    const [companyData, setcompanyData] = useState('')
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        axios.post('/admin/getOneApplication', { slot: props.id }).then(data => {

            data.data && setcompanyData(data.data.Company)
        })
        return setShow(true)
    }

    const arrayValues = useSelector((state) => state.tempArray.value);
    let option = arrayValues[0] && arrayValues[0].map((curr) => {
        return { value: curr._id, label: curr.Company }
    })
    let options = option ? option : [{ value: '', label: 'Loading...' }]

    const dispatch = useDispatch();
    const handleSubmit = () => {

        if (selectedOption) {
            axios.post('/admin/bookSolt', { slot: props.id, applicationId: selectedOption.value }).then((response) => {
                response.data && dispatch(setValue(response.data.Company))
            })
            setShow(false)
        }
    }

    let slots = arrayValues[1] && arrayValues[1].map((curr) => {
        return curr.slot
    })

    const myelement = useRef();

    useEffect(() => {
        slots && slots.map((curr) => {
            if (myelement.current.value === curr) {
                myelement.current.style.backgroundColor = 'green';
            }
            return null
        })
    }, [slots])

    return (
        <>
            <Button value={props.id} style={{ width: 90, height: 90, backgroundColor: "orange" }} ref={myelement} onClick={handleShow} >
                {props.id}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{!companyData ? 'Choose company' : 'Alloted company'}</Modal.Title>


                </Modal.Header>
                <Modal.Body>
                    {!companyData ? <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}

                    /> : <p>{companyData}</p>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {!companyData && <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>}
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default MyModal;
