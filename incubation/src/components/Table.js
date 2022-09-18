import React, { Fragment, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { setValue } from '../redux/tempSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import axios from "../axios";

function Table(props) {

    const [count, setCount] = useState(0)
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const [applicationData, setapplicationData] = useState();

    useEffect(() => {
        axios.get('/admin/applicationDetails').then((response) => {
            setapplicationData(response.data.applicationData)
        })
    },[count])
    const process = (e) => {
        console.log(JSON.parse(e.target.value));
        axios.post('/admin/updateProcess', JSON.parse(e.target.value)).then((response) => {
            setCount(count => count + 1)
            console.log(count)

        })
    }
    let i = 1;
    return (

        < Fragment >
            <div className="ms-auto w-75">
                <h1>{props.title}</h1>
                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th>S No.</th>
                            <th>Company Name</th>
                            <th>Company details</th>
                            <th>Open</th>
                            <th>Status</th>
                            <th>Decline</th>
                            <th>Approve</th>
                        </tr>
                    </thead>
                    <tbody>

                        {applicationData && applicationData.map((curr, index) => {

                            if (props.opened === curr.opened) {
                                return (<tr key={index}>
                                    <td>{i++}</td>
                                    <td>{curr.Company}</td>
                                    <td>{curr.companyDetails}</td>
                                    <td><Button value={curr._id} onClick={(e) => {
                                        dispatch(setValue(e.target.value));
                                        navigate('/admin/application/view')
                                    }}>Open</Button></td>
                                    <td>{curr.approve}</td>
                                    {curr.approve === 'Pending' && <td><Button variant="danger"
                                        value={JSON.stringify({ action: 'Declined', id: curr._id })} onClick={process}>Decline</Button></td>}
                                    {curr.opened === true && curr.approve === 'Pending' && <td><Button variant="success"
                                        value={JSON.stringify({ action: 'Approved', id: curr._id })} onClick={process}>Approve</Button></td>}
                                </tr>)
                            }
                            return null
                        })

                        }

                    </tbody>
                </table>
            </div>
        </Fragment >

    )
}

export default Table;