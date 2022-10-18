import React, { Fragment } from "react";
import AdminHeader from "../components/AdminHeader";
import SideBar from "../components/SideBar";



function AdminHome() {
    return (
        <Fragment>

            <SideBar />
            <AdminHeader />
            <div style={{height:'90vh'}} className="d-flex flex-column justify-content-center ms-auto w-75">

                <img className=" mt-5" src="https://ahalia.ac.in/wp-content/uploads/2022/08/iedc.jpg" />
            </div>

        </Fragment>

    )
}

export default AdminHome