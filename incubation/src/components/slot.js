import React, { Fragment } from "react";
import MyModal from "./Mymodal";


function Slot(props) {

    return (
        <Fragment>
            {[...Array(props.count)].map((curr, index) => {
                return <div key={index } className=" m-2" style={{ width: 90, height: 90}}><MyModal color={'orange'} id={index + props.field+'m'} key={index}/></div>
            })}
        </Fragment>
    )
}

export default Slot;