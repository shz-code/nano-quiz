import React from "react";
import styles from "../assets/css/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration type="login" />
        <Form className={styles.login}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
            required
          />

          <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
            required
          />

          <Button type="submit">
            <span>Submit Now</span>
          </Button>

          <div className="info">Already have an account? instead.</div>
        </Form>
      </div>
    </>
  );
}
