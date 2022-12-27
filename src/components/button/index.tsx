import { ReactNode } from "react";
import styles from "./Button.module.css";

interface IButtonProps {
  children: ReactNode;
  theme?: "yellow" | "transparent";
  hidden?: boolean;
  height?: number;
  width?: number;
  marginTop?: number;
  marginBottom?: number;
  fontSize?: number;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  theme = "yellow",
  hidden = false,
  height,
  width,
  marginTop,
  marginBottom,
  fontSize,
  type = "button",
}: IButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[theme]} ${
        hidden ? styles.hidden : ""
      }`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        fontSize: `${fontSize}px`,
      }}
      type={type}
    >
      {children}
    </button>
  );
}
