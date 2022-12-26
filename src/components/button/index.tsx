import styles from "./Button.module.css";

interface IButtonProps {
  text: string;
  theme?: "yellow" | "transparent";
  hidden?: boolean;
  height?: number;
  width?: number;
  marginTop?: number;
  marginBottom?: number;
}

export default function Button({
  text,
  theme = "yellow",
  hidden = false,
  height,
  width,
  marginTop,
  marginBottom,
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
      }}
    >
      {text}
    </button>
  );
}
