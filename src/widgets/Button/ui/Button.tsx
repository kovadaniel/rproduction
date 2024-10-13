import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Button.module.scss"
import { ButtonProps } from "./Button.types";

export const Button = ({
  className,
  theme,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button 
      className={classNames(classes.Button, {}, [className, classes[theme]])}
      {...props}
    >
      {children}
    </button>
  );
}
