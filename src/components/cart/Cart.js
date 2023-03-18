import { useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <Card className={classes.cart}>
      <Card.Header>CART</Card.Header>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>Name</Col>
            <Col>Price</Col>
            <Col>L</Col>
            <Col>M</Col>
            <Col>S</Col>
          </Row>
        </Card.Title>
        <Card.Text>
          {cartCtx.products.map((item) => {
              return <Row key={item.name}>
              <Col>{item.name}</Col>
              <Col>{item.price}</Col>
              <Col>{item.quantityL ? item.quantityL : 0}</Col>
              <Col>{item.quantityM ? item.quantityM : 0}</Col>
              <Col>{item.quantityS ? item.quantityS : 0}</Col>
            </Row>;
          })}
          <p>{`TOTAL AMOUNT:- ${cartCtx.totalAmount} RS`}</p>
        </Card.Text>
        <Button variant="primary">PURCHASE</Button>
        <Button variant="outline-warning">CANCLE</Button>
      </Card.Body>
    </Card>
  );
};

export default Cart;
