import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
  textOnly?: boolean;
  to?: never;
};
type LinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  textOnly?: boolean;
  to: string;
};

type ButtonComponentProps = ButtonProps | LinkProps;

const Button: React.FC<ButtonComponentProps> = (props) => {
  const { children, textOnly = false, to, ...rest } = props;

  if (to) {
    return (
      <Link to={to} {...(rest as Omit<LinkProps, "to">)}>
        {children}
      </Link>
    );
  }
  return <button {...(rest as Omit<ButtonProps, "to">)}>{children}</button>;
};

export default Button;
