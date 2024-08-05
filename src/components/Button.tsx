import React, { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: string;
};
type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

function isAnchorProp(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

const Button: React.FC<ButtonProps | AnchorProps> = (props) => {
  if (isAnchorProp(props)) return <a {...props} >// component content</a>;
};

export default Button;
