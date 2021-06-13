import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import styles from "./NavBar.module.css";
import Calendar from "react-calendar";
import CalendarPage from "../CalendarPage/CalendarPage";
import Welcome from "../WelcomeBar/Welcome";

export default function NavBar() {
  const [radioValue, setRadioValue] = useState("1");
  const [username, setUsername] = useState("");

  useEffect(() => {}, []);

  useEffect(() => {
    setUsername(window.location.href.split("username=", 2)[1]);
  }, [radioValue]);

  const radios = [
    { name: "Diary", value: "1" },
    { name: "Analysis", value: "2" },
  ];

  return (
    <>
      <Welcome username={username} />
      <ButtonGroup toggle className={styles.navBarRoot}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="info"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            className={
              radioValue == 1
                ? idx == 1
                  ? styles.buttonStyle1
                  : styles.buttonStyle2
                : idx == 1
                ? styles.buttonStyle2
                : styles.buttonStyle1
            }
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      {radioValue == 1 ? (
        <div>
          <CalendarPage username={username} />
        </div>
      ) : (
        <div> Welcome, {username}</div>
      )}
    </>
  );
}
