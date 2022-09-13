import React from "react";
import styles from "../assets/css/Signup.module.css";
import Button from "../Button";
import Checkbox from "../CheckBox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <div className="column">
      <Illustration type="signup" />
      <Form className={styles.signup}>
        <TextInput
          type="text"
          placeholder="Enter name"
          icon="person"
          required
        />

        <TextInput
          type="text"
          required
          placeholder="Enter email"
          icon="alternate_email"
        />

        <TextInput
          type="password"
          required
          placeholder="Enter password"
          icon="lock"
        />

        <TextInput
          type="password"
          required
          placeholder="Confirm password"
          icon="lock_clock"
        />
        <Checkbox required text="I agree to the Terms &amp; Conditions" />
        <Button text="Submit Now" type="submit" />

        <div className="info">Already have an account? instead.</div>
      </Form>
    </div>
  );
}
