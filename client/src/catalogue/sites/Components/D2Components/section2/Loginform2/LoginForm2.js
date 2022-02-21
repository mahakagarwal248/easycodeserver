import React, { useContext } from "react";
import "./LoginForm2.css";
import { Tabs } from "antd";
import Workingcontext from "../../../../../../contexts/workngalert/workingcontext";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function LoginForm2() {
  const mycontext = useContext(Workingcontext);
  return (
    <div className="loginform2">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane className="Tabs" tab="Login" key="1">
          <form>
            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
            <br />
            <button
              onClick={(event) => {
                event.preventDefault();
                mycontext.customtoast("website in development state ", "warn");
              }}
            >
              Login
            </button>
          </form>
        </TabPane>
        <TabPane tab="Register" key="2">
          <form>
            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
            <input type="password" placeholder="Confirm Password" />
            <br />
            <button
              onClick={(event) => {
                event.preventDefault();
                mycontext.customtoast("website in development state ", "warn");
              }}
            >
              Register
            </button>
          </form>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default LoginForm2;
