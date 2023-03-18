import React, { useState } from "react";
import TShirtContext from "./tshirt-context";

const TShirtProvider=(props)=>{

    const [TShirts,setTShirts]=useState([])

    const addHandler=(item)=>{
        setTShirts((prevTShirt)=>{
            const updatedTShirts=prevTShirt.concat(item)
            return updatedTShirts;
        })
    }
    const tshirtContext={
        TShirts:TShirts,
        addTShirt:addHandler,
    }
    return <TShirtContext.Provider value={tshirtContext}>
        {props.children}
    </TShirtContext.Provider>
};

export default TShirtProvider;