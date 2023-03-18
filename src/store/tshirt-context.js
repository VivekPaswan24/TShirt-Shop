import React from "react";

const TShirtContext=React.createContext({
    TShirts:[],
    addTShirt:(item)=>{}
});

export default TShirtContext;

