import React, { Fragment } from "react";
import AdminHeader from "../components/AdminHeader";
import SideBar from "../components/SideBar";
import Table from "../components/Table";


function AdminHome() {
    return (
        <Fragment>

            <SideBar />
            <AdminHeader />
            <div className="mx-auto">
               
                <Table title={'New application List'} />
                <Table title={'Pending application List'} />
            </div>

        </Fragment>

    )
}

export default AdminHome