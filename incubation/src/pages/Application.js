import React, { Fragment} from "react";
import AdminHeader from "../components/AdminHeader";
import SideBar from "../components/SideBar";
import Table from "../components/Table";




function Application() {

  
    return (
        <Fragment>

            <SideBar />
            <AdminHeader />
            <div className="mx-auto">
                <Table  opened={false} title={'New application List'} />
                <Table opened={true}  title={'Pending application List'} />
            </div>

        </Fragment>

    )
}

export default Application;