import React from "react";
import { css } from "@emotion/react";
import style from "./Spinner.module.css";
import HashLoader from "react-spinners/HashLoader";
const Spinner = (props) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div className={style.CompSpinner}>
      <h1 id={style.msgid}>{props.msg}</h1>
      <div className={style.mainclass}>
        <div className={style.spinnerclass}>
          <HashLoader
            color={"#408ba8"}
            css={override}
            loading={props.loading}
            size={(window.innerHeight + window.innerWidth) / 15}
            className={style.CompHash}
          />
        </div>
        <h1 className={style.logoclass}>EasyCoder...</h1>
      </div>
    </div>
  );
};

export default Spinner;
