import React from "react";
import { Input } from "../styles/InputField";

const InputField = ({
  label,
  placeholder,
  height,
  name,
  value,
  changeHandle,
}) => {
  return (
    <Input>
      <label>{label}</label>
      <input
        type={"text"}
        placeholder={placeholder}
        style={{ height: { height } }}
        name={name}
        value={value}
        onChange={changeHandle}
        readOnly
      />
    </Input>
  );
};

export default InputField;
