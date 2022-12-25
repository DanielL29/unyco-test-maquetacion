import styles from "./Title.module.css";

interface ITitleProps {
  text: string;
  hidden?: boolean;
  marginTop?: number;
  marginBottom?: number;
}

export default function Title({
  text,
  hidden = false,
  marginTop = 0,
  marginBottom = 0,
}: ITitleProps) {
  return (
    <h1
      className={`${styles.title} ${hidden ? styles.hidden : ""} `}
      style={{ marginTop: `${marginTop}px`, marginBottom: `${marginBottom}px` }}
    >
      {text}
    </h1>
  );
}
