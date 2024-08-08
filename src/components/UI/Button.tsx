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
  const { children, textOnly, to, ...rest } = props;
  const className = `button ${textOnly ? "button--text-only" : ""}`;

  if (to) {
    return (
      <Link to={to} {...(rest as Omit<LinkProps, "to">)} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button {...(rest as Omit<ButtonProps, "to">)} className={className}>
      {children}
    </button>
  );
};

export default Button;
