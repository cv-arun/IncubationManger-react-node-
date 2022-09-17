import React, { Fragment } from "react";
import AdminHeader from "../components/AdminHeader";
import SideBar from "../components/SideBar";
import Slot from "../components/slot";





function SlotBookingPage() {
   
    return (
        <Fragment>

            <SideBar />
            <AdminHeader />
            <div className="mt-5 ms-auto w-75 border border-dark shadow ">
                <div className="d-flex justify-content-center overflow-auto "><Slot key={'f0'} field={'f0'} count={10} /></div>
                <hr className="mb-5" /><hr />
                <div  className=" d-flex justify-content-center overflow-auto">
                    {[...Array(15)].map((e, i) => {
                        return i % 3 !==0 ? <div><Slot key={`f${i}`} field={`f${i}`} count={3} /></div>: <div style={{width:2}} key={`f${i}`} className="mx-1 vr bg-dark"></div>
                    })}
                    
                </div>
               
            </div>

        </Fragment>

    )
}

export default SlotBookingPage