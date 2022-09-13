import React, { useState } from "react";


export const  handleForm=(initalValue)=>{
    const [state, setState] = useState(initalValue);

    let setData = (e) => {
        setState({...state,[e.target.name]:e.target.value})
    }
    let clearData = (e) => {
        setState(initalValue)
    }
   

    return [state,setData,clearData]
}

