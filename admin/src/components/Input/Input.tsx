import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./input.module.css";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, required, error, id, ...rest }, ref) => {
    return (
      <fieldset className="mb-2">
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
        <input
          id={id}
          ref={ref}
          required={required}
          className={styles.input}
          {...rest}
        />
        {error && <span className={styles.error}>{error}</span>}
      </fieldset>
    );
  }
);

export default Input;
