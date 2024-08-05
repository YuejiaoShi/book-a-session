import React, { ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input: React.FC<InputProps> = ({}) => {
  return (
    <div>
      <label htmlFor=""></label>
      <input></input>
    </div>
  );
};

export default Input;
