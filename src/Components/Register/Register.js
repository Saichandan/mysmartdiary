import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Register.module.css";
import { registerUser } from "../../API/registerUser";

export default function Register() {
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
            registerUser(email, password);
          }}
        >
          Register
        </Button>
        <Button
          variant="primary"
          type="button"
          className={styles.SubmitButton}
          onClick={() => {
            window.location = "/";
          }}
        >
          Back to login
        </Button>
      </Form>
    </div>
  );
}
