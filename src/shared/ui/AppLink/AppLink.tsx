import { Link, LinkProps } from "react-router-dom";
import { ReactNode } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import classes from "./AppLink.module.scss"

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = ({
  className,
  to,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...props
}: AppLinkProps) => {
  return (
    <Link
      to={to}
      className={classNames(classes.AppLink, {}, [className, classes[theme]])}
      {...props}
    >
      {children}
    </Link>
  );
}
