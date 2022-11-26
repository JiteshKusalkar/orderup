import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={styles.button} />;
}

export default Button;
