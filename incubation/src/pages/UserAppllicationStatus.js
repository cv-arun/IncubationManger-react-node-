import React, { Fragment } from "react";
import UserHead from "../components/UserHead";
import RecordTable from "../components/RecordList";



function ApplicationStatus() {
    return (
        <Fragment>


            <UserHead />
            <RecordTable admin={false} />


        </Fragment>

    )
}

export default ApplicationStatus