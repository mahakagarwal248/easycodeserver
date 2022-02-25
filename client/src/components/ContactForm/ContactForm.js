import style from "./ContactForm.module.css";
import React, { useState, useContext } from "react";
import Navbar from "../Navbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router";
import Workingcontext from "../../contexts/workngalert/workingcontext";
import { ToastContainer } from "react-toastify";
const ContactForm = () => {
  const mycontext = useContext(Workingcontext);
  const navigate = useNavigate();
  const [Ename, setEname] = useState(false);
  const [Emsg, setEmsg] = useState(false);
  const [Enumber, setEnumber] = useState(false);
  const [Eemail, setEemail] = useState(false);

  const [defaulename, setdefaulename] = useState("Enter Name");
  const [defaultemail, setdefaultemail] = useState("example@gmail.com");
  const [defaultmsg, setdefaultmsg] = useState("Enter your query here");
  const [defaultnumber, setdefaultnumber] = useState("Enter Mobile Number");
  const SendData = new FormData();
  const isEmptystyle = () => {
    if (!myfdata.name) {
      setEname(true);
      setdefaulename("*Required :name cannt be blank");
      mycontext.customtoast("name is Required", "error");
    }
    if (!myfdata.msg) {
      setEmsg(true);
      setdefaultmsg("*Required : message cannt be blank");
      mycontext.customtoast("message is Required", "error");
    }
    if (!myfdata.number) {
      setEnumber(true);
      setdefaultnumber("*Required :number cannt be blank");
      mycontext.customtoast("number is Required", "error");
    }
    if (!myfdata.email) {
      setEemail(true);
      setdefaultemail("*Required :email cannt be blank");
      mycontext.customtoast("email is Required", "error");
    }
  };
  const [myfdata, setmyfdata] = useState({
    name: "",
    email: "",
    msg: "",
    number: "",
  });
  const handleonchange = (event, field) => {
    setmyfdata({
      ...myfdata,
      [field]: event.target.value,
    });
  };
  const onsubmit = async (event) => {
    event.preventDefault();
    isEmptystyle();
    const { name, email, number, msg } = myfdata;
    if (name && email && number && msg) {
      try {
        SendData.append("username", name);
        SendData.append("email", email);
        SendData.append("number", number);
        SendData.append("msg", msg);
        if (!isNaN(parseInt(myfdata.number))) {
          setloading(true);
          const responce = await fetch("/contactus/mail", {
            method: "POST",
            body: SendData,
          });
          const data = await responce.json();

          if (data.result) {
            setloading(false);
            navigate("/");
            mycontext.customtoast("message send", "success");
          } else {
            mycontext.customtoast("Error 404 Msg is not send", "error");
          }
        } else {
          mycontext.customtoast("Mobile Number:Invalid", "error");
        }
      } catch (error) {
        setloading(false);
        mycontext.customtoast("Error 404 Msg is not send", "error");
        console.log(error);
        navigate("/");
      }
    }
  };

  const [loading, setloading] = useState(false);
  return (
    <>
      {loading ? (
        <Spinner loading={loading} msg="wait...." />
      ) : (
        <>
          <Navbar />

          <div className={style.firstdiv}>
            <h1 className={style.h1}>
              <ArrowForwardIcon className={style.iconclass} />
              Get in Touch!
            </h1>
            <form className={style.form}>
              <label htmlFor="name" className={style.label}>
                Full name:
              </label>
              <br />
              <input
                className={Ename ? style.empty : style.contactForm}
                type="text"
                placeholder={defaulename}
                value={myfdata.name}
                onChange={(event) => handleonchange(event, "name")}
                id="name"
                name="fname"
              />
              <br />
              <label htmlFor="email" className={style.label}>
                Email:
              </label>
              <br />
              <input
                className={Eemail ? style.empty : style.contactForm}
                type="email"
                onChange={(event) => handleonchange(event, "email")}
                placeholder={defaultemail}
                value={myfdata.email}
                id="email"
                name="lname"
              />
              <br />
              <label htmlFor="email" className={style.label}>
                Mobile Number:
              </label>
              <br />
              <input
                className={Enumber ? style.empty : style.contactForm}
                type="tel"
                onChange={(event) => handleonchange(event, "number")}
                placeholder={defaultnumber}
                value={myfdata.number}
                id="number"
                name="lname"
              />
              <br />

              <label htmlFor="textarea" className={style.label}>
                Your query:
              </label>
              <br />
              <textarea
                className={Emsg ? style.emptytextarea : style.mytextarea}
                onChange={(event) => handleonchange(event, "msg")}
                cols="2"
                placeholder={defaultmsg}
                id="textarea"
                rows="3"
                value={myfdata.msg}
              ></textarea>
              <label htmlFor="email" className={style.label}>
                Upload File:
              </label>
              <br />
              <input
                className={style.file}
                type="file"
                onChange={(event) => {
                  SendData.append("file", event.target.files[0]);
                }}
                placeholder={defaultnumber}
                id="file"
                name="file"
              />
              <br />
              <button
                className={style.button}
                onClick={(event) => onsubmit(event)}
              >
                Submit
              </button>
            </form>
          </div>

          <ToastContainer theme="colored" />
        </>
      )}
    </>
  );
};

export default ContactForm;
