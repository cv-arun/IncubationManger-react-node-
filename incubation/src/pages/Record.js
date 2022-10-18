import React, { Fragment } from "react";
import AdminHeader from "../components/AdminHeader";
import SideBar from "../components/SideBar";
import RecordTable from "../components/RecordList";



function RecordPage() {
    return (
        <Fragment>

            <SideBar />
            <AdminHeader />
            <div className="ms-auto w-75">
                <RecordTable admin={true} />
            </div>

        </Fragment>

    )
}

export default RecordPage