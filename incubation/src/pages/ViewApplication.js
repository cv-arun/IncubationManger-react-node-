import React, { Fragment } from "react";
import AdminHeader from "../components/AdminHeader";

import ViewApplicationForm from "../components/ViewApplication";




function ViewApplication() {



    return (
        <Fragment>

           
            <AdminHeader />
            <div className="mx-auto">
                <ViewApplicationForm />
            </div>

        </Fragment>

    )
}

export default ViewApplication;