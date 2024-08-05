import React, { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: string;
};
type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

const Button: React.FC<ButtonProps | AnchorProps> = ({}) => {
  return <div>// component content</div>;
};

export default Button;
