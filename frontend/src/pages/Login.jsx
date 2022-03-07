import React from "react";
import { Form, Container, Button } from "react-bootstrap";

function Login() {
  return (
    <Container className="pt-5 pb-5">
      <h2 className="text-center">Login</h2>
      <Form>
        <Form.Group className="mb-3" contorlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll nnever share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
