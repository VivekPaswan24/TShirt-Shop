import React, { useContext } from "react";
import { Button,Badge } from "react-bootstrap";
import CartContext from "../../store/cart-context";
const HeaderCartButton=()=>{
    const cartCtx=useContext(CartContext);

    const number=cartCtx.products.length
    return <Button variant="outline-warning">Cart <Badge bg="secondary">{number}</Badge></Button>
};

export default HeaderCartButton;