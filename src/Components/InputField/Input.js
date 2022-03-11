import React from "react";
import "../../container/Login/_account.scss";

const Input = (props) => {
  const { setData, classStyle, placeholder, inputType, showPass } = props;
  return (
    <>
      {inputType === "text" ? (
        <input
          type="text"
          placeholder={placeholder}
          className={classStyle}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
      ) : (
        <input
          type={showPass ? "text" : "password"}
          placeholder={placeholder}
          className={classStyle}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
      )}
    </>
  );
};

export default Input;
