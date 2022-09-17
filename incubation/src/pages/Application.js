import React, { Fragment, useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import SideBar from "../components/SideBar";
import Table from "../components/Table";
import axios from '../axios'



function Application() {

    const [applicationData, setapplicationData] = useState();

    useEffect(() => {
        axios.get('/admin/applicationDetails').then((response) => {
            setapplicationData(response.data.applicationData)
        })

    }, [])
    return (
        <Fragment>

            <SideBar />
            <AdminHeader />
            <div className="mx-auto">
                <Table data={applicationData} title={'New application List'} />
                <Table data={applicationData} title={'Pending application List'} />
            </div>

        </Fragment>

    )
}

export default Application;