import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./CalendarPage.module.css";
import { fetchEntry } from "../../API/fetchEntry";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { editEntry } from "../../API/editEntry";

export default function CalendarPage() {
  const username = window.location.href.split("username=", 2)[1];
  const [value, onChange] = useState(new Date());
  const [dateStr, setDateStr] = useState(
    value.getDate() + "-" + value.getMonth() + "-" + value.getFullYear()
  );
  const [entryText, setEntryText] = useState("");
  useEffect(() => {
    setDateStr(
      value.getDate() + "-" + value.getMonth() + "-" + value.getFullYear()
    );

    async function fetchMyAPI() {
      let response = await fetchEntry(username, dateStr);
      let resp = await response;
      setEntryText(resp);
    }

    fetchMyAPI();
    console.log("ENTRY:", entryText);
  }, [value, dateStr]);

  return (
    <div>
      <Calendar
        className={styles.calendarStyle}
        onChange={onChange}
        value={value}
      />
      {console.log("Sending: ", entryText)}
      <div className={styles.OuterBox}>
        <div className={styles.Heading}>Showing entry for : {dateStr}</div>
        <Form className={styles.Container}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Update Entry</Form.Label>
            <Form.Control
              placeholder={entryText ? entryText : "Click to start writing"}
              as="textarea"
              rows={30}
              value={entryText ? entryText : ""}
              onChange={(e) => {
                setEntryText(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            className={styles.SubmitButton}
            onClick={() => {
              editEntry(username, dateStr, entryText);
            }}
          >
            Save
          </Button>
        </Form>
      </div>
    </div>
  );
}
