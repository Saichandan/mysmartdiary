import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./login.module.css";
import { validateLogin } from "../../API/validateLogin";
import { useAlert } from "react-alert";

export default function Login() {
  const alert = useAlert();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Form className={styles.Container}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className={styles.Username}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className={styles.Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          className={styles.SubmitButton}
          onClick={() => {
            validateLogin(email, password);
          }}
        >
          Login
        </Button>

        <Button
          variant="primary"
          type="button"
          className={styles.SubmitButton}
          onClick={() => {
            window.location = "/register";
          }}
        >
          Register
        </Button>
      </Form>
    </div>
  );
}
