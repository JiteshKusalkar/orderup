import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

function Button({
  className = "",
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`${styles.button} ${className}`} {...restProps} />;
}

export default Button;
