import React, { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={id}></label>
        <input id={id}></input>
      </div>
    );
  }
);

export default Input;
