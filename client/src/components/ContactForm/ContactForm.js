import style from "../ContactForm/ContactForm.module.css";
import React, { useState } from "react";
import Navbar from "../Navbar";
import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router";
const ContactForm = () => {
  const navigate = useNavigate();

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
      setloading(true);
      const { name, email, msg } = FormData;
      const responce = await fetch("/contactus/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, msg }),
      });

      const data = await responce.json();
      if (data.result) {
        alert("msg send....");
        setloading(false);
        navigate("/");
      } else {
        alert("there is some problem in network please retry");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [loading, setloading] = useState(false);
  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <Navbar />
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
        </>
      )}
    </>
  );
};

export default ContactForm;
