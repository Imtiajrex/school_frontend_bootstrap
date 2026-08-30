import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Call from "../services/API/Call";

export default function Login() {
  const [validated, setValidated] = useState(false);
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    Call({
      method: "post",
      url: "/login",
      data: { username: "imtiajrex", password: "123456", device_name: "web" },
    })
      .then((res) => {
        localStorage.setItem("token", res.token);
        localStorage.setItem("role", res.role);
        localStorage.setItem("permissions", res.permissions);
        localStorage.setItem("user_type", res.user_type);
        history.push("/" + res.user_type);
      })
      .catch((err) => {
        console.log(err);
      });
    setValidated(true);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Container
        style={{
          maxWidth: "450px",
          textAlign: "center",
          boxShadow: "0px 3px 5px rgba(0,0,0,0.3)",
          padding: 45,
          borderRadius: 35,
        }}
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h3 className="text-dark">Log In</h3>
          <Form.Group
            controlId="formBasicEmail"
            style={{ textAlign: "left", margin: "2rem 0" }}
          >
            <Form.Control type="text" placeholder="Username" required />
            <Form.Control.Feedback type="invalid">
              Enter Valid Username
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            style={{ textAlign: "left", margin: "2rem 0" }}
          >
            <Form.Control type="password" placeholder="Password" required />

            <Form.Control.Feedback type="invalid">
              Enter Valid Password
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
