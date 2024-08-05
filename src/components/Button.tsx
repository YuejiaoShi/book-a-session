import React, { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
  textOnly?: boolean;
  to?: never;
};
type LinkProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
  textOnly?: boolean;
  to?: string;
};

function isAnchorProp(props: ButtonProps | LinkProps): props is AnchorProps {
  return "href" in props;
}

const Button: React.FC<ButtonProps | LinkProps> = (props) => {};

export default Button;
