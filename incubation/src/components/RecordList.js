import React, { Fragment } from "react";
import ProgressBar from "./ProgressBar";


function RecordTable(props) {
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
                            <th style={{width:'50vw'}}>progrss</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>index</td>
                            <td>Company Name</td>
                            <td>Company details</td>
                            <td><ProgressBar varient={'success'} value={'40'}/></td>
                           
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>

    )
}

export default RecordTable;