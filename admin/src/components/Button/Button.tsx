import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={styles.button} {...props} />;
}

export default Button;
