import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...props }) => {
    return (
      <div className="control">
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} {...props} />
      </div>
    );
  }
);

export default Input;
