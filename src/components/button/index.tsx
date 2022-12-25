import styles from "./Button.module.css";

interface IButtonProps {
  text: string;
  theme?: "yellow" | "transparent";
  hidden?: boolean;
}

export default function Button({
  text,
  theme = "yellow",
  hidden = false,
}: IButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[theme]} ${
        hidden ? styles.hidden : ""
      }`}
    >
      {text}
    </button>
  );
}
