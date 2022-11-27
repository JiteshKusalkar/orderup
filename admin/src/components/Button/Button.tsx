import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./button.module.css";

type Variant = "primary" | "default";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

function getStyleByVariant(variant: Variant) {
  const lookup = {
    primary: styles.primaryButton,
    default: styles.defaultButton,
  };

  return lookup[variant];
}

function Button({
  variant = "primary",
  className = "",
  ...restProps
}: ButtonProps) {
  const classes = twMerge(getStyleByVariant(variant), className);

  return <button className={classes} {...restProps} />;
}

export default Button;
