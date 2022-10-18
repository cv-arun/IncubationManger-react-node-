import DataTable from "../components/UserTable";
import React, { Fragment } from "react";
import AdminHeader from "../components/AdminHeader";
import SideBar from "../components/SideBar";
import Addnewuser from "../components/AddNewUser";


function userDetails() {

    return <Fragment>

        <SideBar />
        <AdminHeader />
        <div className="ms-auto w-75 d-flex flex-column">
            <Addnewuser add={true}/>
            <DataTable />
        </div>

    </Fragment>
}

export default userDetails;