import React, { useState } from "react";
import cx from "classnames";
import { Input, Button } from "../primitives";
import * as styles from "./contact-form.module.css";

const ERROR_MESSAGES = {
  name: "Enter a valid name",
  email: "Enter a valid email",
  message: "Write at least 10 characters"
};

const ContactForm = ({ className, ...props }) => {
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    message: null
  });
  const [state, setState] = useState("none");
  const isFormValid = Object.values(errors).every((error) => error == null);

  const getButtonLabel = () => {
    switch (state) {
      case "success":
        return "Sent!";
      case "loading":
        return "Sending...";
      case "failure":
        return "Something went wrong";
      default:
        return "Send message";
    }
  };

  const handleBlur = (evt) => {
    const { validity, name } = evt.target;

    if (!validity.valid) {
      setErrors({
        ...errors,
        [name]: ERROR_MESSAGES[name]
      });
    }
  };

  const handleChange = (evt) => {
    if (evt.target.validity.valid) {
      setErrors({
        ...errors,
        [evt.target.name]: null
      });
    }
  };

  const validate = (input) => {
    return input.validity.valid ? null : ERROR_MESSAGES[input.name];
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { name, email, message } = evt.target.elements;
    const errors = {
      name: validate(name),
      email: validate(email),
      message: validate(message)
    };

    setErrors(errors);

    if (Object.values(errors).every((error) => error == null)) {
      setState("loading");

      const formData = new FormData(evt.target);

      formData.append("service_id", "gmail");
      formData.append("template_id", "t6f0aA");
      formData.append("user_id", "user_mZ5eVYgFOb6lQnj8gcvRJ");

      fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
        method: "POST",
        body: formData
      }).then((response) => setState(response.ok ? "success" : "failure"));
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={cx(styles.main, className, {
        [styles.disabled]: state === "success"
      })}
      {...props}
    >
      <Input
        id="name"
        type="text"
        label="Your name"
        onBlur={handleBlur}
        onChange={handleChange}
        required
        minLength="3"
        error={errors.name}
      />
      <Input
        id="email"
        type="email"
        label="Your email address"
        required
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        id="message"
        multiline
        label="Your message"
        required
        minLength="10"
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.message}
      />
      <Button
        type="submit"
        disabled={!isFormValid || state === "success" || state === "loading"}
      >
        {getButtonLabel()}
      </Button>
    </form>
  );
};

export default ContactForm;
