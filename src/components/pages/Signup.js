import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import styles from "../assets/css/Signup.module.css";
import Button from "../Button";
import Checkbox from "../CheckBox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [uniID, SetUniID] = useState("");
  const [pass, Setpass] = useState("");
  const [conpass, Setconpass] = useState("");
  const [agree, Setagree] = useState(true);

  const [loading, Setloading] = useState(false);
  const [error, Seterror] = useState("");
  const { signup } = useAuth();

  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (agree === false) {
      return Seterror("Please accept terms & conditions");
    } else if (pass !== conpass) {
      return Seterror("Password doesn't match");
    }
    try {
      Seterror("");
      Setloading(true);
      await signup(email, pass, name, uniID);
      navigator("/");
    } catch (err) {
      Seterror("Failed to create account");
      Setloading(false);
    }
  };

  return (
    <>
      <h1>Create an account</h1>
      <div className={styles.signup_col}>
        <div className={styles.signup_img}>
          <Illustration type="signup" />
        </div>
        <Form className={styles.signup} onSubmit={handleSubmit}>
          <TextInput
            type="text"
            placeholder="Enter name"
            icon="person"
            required
            value={name}
            onChange={(e) => Setname(e.target.value)}
          />

          <TextInput
            type="email"
            required
            placeholder="Enter email"
            icon="alternate_email"
            value={email}
            onChange={(e) => Setemail(e.target.value)}
          />

          <TextInput
            type="number"
            required
            placeholder="Enter University ID"
            icon="pin"
            value={uniID}
            onChange={(e) => SetUniID(e.target.value)}
          />

          <TextInput
            type="password"
            required
            placeholder="Enter password"
            icon="lock"
            value={pass}
            onChange={(e) => Setpass(e.target.value)}
          />
          <div>* Password should be at least 6 characters</div>
          <TextInput
            type="password"
            required
            placeholder="Confirm password"
            icon="lock_clock"
            value={conpass}
            onChange={(e) => Setconpass(e.target.value)}
          />
          <Checkbox
            text="I agree to share my email and university ID for records and evaluations."
            checked={agree}
            onChange={(e) => Setagree(e.target.checked)}
          />
          <Button type="submit" disabled={loading}>
            <span>Submit Now</span>
          </Button>

          {error && <div className="error">{error} </div>}
          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
