import React, { Fragment, useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import axios from '../axios'



function RecordTable(props) {
    const [data, setData] = useState([])
    let url = props.admin ? 'admin/applicationDetails' : 'applicationStatus'
    useEffect(() => {
        axios.get(`/${url}`).then(data => {
            setData(data.data.applicationData)
        })
    }, [])

    return (

        <Fragment>
            <div className="mx-auto ">
                <h1>{props.title}</h1>
                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th>S No.</th>
                            <th>Company Name</th>
                            <th>Company details</th>
                            <th style={{ width: '50vw' }}>progrss</th>
                            <th>status/Alloted slot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((curr, i) => {
                            let Percentage
                            let colour
                            switch (curr.approve) {
                                case 'Pending':
                                    Percentage = '33'
                                    colour = 'danger'
                                    break;
                                case 'Approved':
                                    Percentage = '66'
                                    colour = 'warning'
                                    break;
                                case 'Slote_alloted':
                                    Percentage = '100'
                                    colour = 'success'
                                    break;
                                default:

                            }

                            return (< tr >
                                <td>{i + 1}</td>
                                <td>{curr.Company}</td>
                                <td>{curr.companyDetails}</td>
                                <td data-toggle="tooltip" data-placement="right" title={curr.approve}>
                                    <ProgressBar varient={colour} value={Percentage} /></td>
                                <td>{curr.slot?curr.slot:curr.approve}</td>
                            </tr>)
                        }
                        )}

                    </tbody>
                </table>
            </div>
        </Fragment >

    )
}

export default RecordTable;