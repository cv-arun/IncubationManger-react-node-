import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

function Table(props) {
    console.log(props.data)
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
                        {props.data && props.data.map((curr, index) => {
                            return (<tr key={index}>
                                <td>{index + 1}</td>
                                <td>{curr.Company}</td>
                                <td>{curr.companyDetails}</td>
                                <td><Button>Open</Button></td>
                                <td>{curr.approve ? 'approved' : 'pending'}</td>
                                {!curr.approve && <td><Button variant="danger">Decline</Button></td>}
                                {!curr.approve && <td><Button variant="success">Approve</Button></td>}
                            </tr>)
                        })}

                    </tbody>
                </table>
            </div>
        </Fragment >

    )
}

export default Table;