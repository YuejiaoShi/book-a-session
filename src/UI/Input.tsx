import React, { ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input: React.FC<InputProps | HTMLInputElement> = ({}) => {
  return (
    <div>
      <label htmlFor={id}></label>
      <input id={id}></input>
    </div>
  );
};

export default Input;
