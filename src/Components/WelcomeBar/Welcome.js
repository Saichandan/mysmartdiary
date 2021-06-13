import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import styles from "./Welcome.module.css";
import CalendarPage from "../CalendarPage/CalendarPage";

export default function Welcome(username) {
  useEffect(() => {}, []);

  return (
    <>
      <div className={styles.navBarRoot}>
        <h1 className={styles.welcomeDiv}>Welcome, {username.username}!</h1>
        <ButtonGroup>
          <Button
            variant="primary"
            type="button"
            className={styles.buttonStyle1}
            onClick={() => {
              window.location = "/";
            }}
          >
            Logout
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}
