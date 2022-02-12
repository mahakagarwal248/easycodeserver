import style from "../ContactForm/ContactForm.module.css";
import React, { useState } from "react";
const ContactForm = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const handleonchange = (event, field) => {
    setFormData({
      ...FormData,
      [field]: event.target.value,
    });
  };
  const onsubmit = async () => {
    try {
      const { name, email, msg } = FormData;
      const responce = await fetch("/contactus/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, msg }),
      });
      console.log(responce);
      const data = await responce.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={style.firstdiv}>
      <form method="POST">
        <label htmlFor="name">full name:</label>
        <br />
        <input
          type="text"
          value={FormData.name}
          onChange={(event) => handleonchange(event, "name")}
          id="name"
          name="fname"
        />
        <br />
        <label htmlFor="email">Your email</label>
        <br />
        <input
          type="email"
          onChange={(event) => handleonchange(event, "email")}
          placeholder="example@gmai.com"
          value={FormData.email}
          id="email"
          name="lname"
        />
        <br />

        <label htmlFor="textarea">your message:</label>
        <br />
        <textarea
          className={style.mytextarea}
          onChange={(event) => handleonchange(event, "msg")}
          cols="2"
          id="textarea"
          rows="3"
          value={FormData.msg}
        ></textarea>
      </form>
      <button
        onClick={() => {
          onsubmit();
        }}
      >
        send
      </button>
    </div>
  );
};

export default ContactForm;
