"use client";

import React, { useState } from "react";
import styles from "@/app/contact/contact.module.css";

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleSubmit() {}

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  console.log(user)

  return (
    <>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
          <label htmlFor="username" className={styles.label}>
            Name:
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Your Name"
              onChange={handleChange}
              value={user.username}
              required
            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label htmlFor="email" className={styles.label}>
            Email:
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Your email"
              onChange={handleChange}
              value={user.email}
              required
            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label htmlFor="phone" className={styles.label}>
            Phone no.:
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter Your phone"
              onChange={handleChange}
              value={user.phone}
              required
            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label htmlFor="message" className={styles.label}>
            Message:
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Enter Your Message"
              onChange={handleChange}
              value={user.message}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
