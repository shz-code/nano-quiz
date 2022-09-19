import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import styles from "../assets/css/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
  const [email, Setemail] = useState("");
  const [pass, Setpass] = useState("");
  const [loading, Setloading] = useState(false);
  const [error, Seterror] = useState("");

  const { login } = useAuth();

  const navigater = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    Seterror("");
    Setloading(true);
    try {
      await login(email, pass);
      Setloading(false);
      navigater("/");
    } catch (err) {
      Setloading(false);
      if (err.code === "auth/invalid-email")
        Seterror("Invalid email. Try again!");
      else if (err.code === "auth/user-not-found")
        Seterror("User not found. Try again!");
      else if (err.code === "auth/wrong-password")
        Seterror("Password do not match. Try again!");
    }
  };

  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration type="login" />
        <Form className={styles.login} onSubmit={handleSubmit}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
            required
            value={email}
            onChange={(e) => Setemail(e.target.value)}
          />

          <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
            required
            value={pass}
            onChange={(e) => Setpass(e.target.value)}
          />

          <Button type="submit" disabled={loading}>
            Submit Now
          </Button>
          {error && <div className="error">{error} </div>}
          <div className="info">
            New to Nano Quiz? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
