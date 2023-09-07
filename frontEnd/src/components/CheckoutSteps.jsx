import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>
        <h4>Sign-In</h4>
      </Col>
      <Col className={props.step2 ? 'active' : ''}>
        <h4>Shipping</h4>
      </Col>
      <Col className={props.step3 ? 'active' : ''}>
        <h4>Payment</h4>
      </Col>
      <Col className={props.step4 ? 'active' : ''}>
        <h4>Place Order</h4>
      </Col>
    </Row>
  );
}
