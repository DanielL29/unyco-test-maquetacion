import styles from "./Button.module.css";

interface IButtonProps {
  text: string;
  theme?: "yellow" | "transparent";
}

export default function Button({ text, theme = "yellow" }: IButtonProps) {
  return (
    <button className={`${styles.button} ${styles[theme]}`}>{text}</button>
  );
}
