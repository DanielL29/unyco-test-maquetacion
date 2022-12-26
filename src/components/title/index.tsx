import styles from "./Title.module.css";

interface ITitleProps {
  text: string;
  hidden?: boolean;
  marginTop?: number;
  marginBottom?: number;
  fontSize?: number;
}

export default function Title({
  text,
  hidden = false,
  marginTop = 0,
  marginBottom = 0,
  fontSize,
}: ITitleProps) {
  return (
    <h1
      className={`${styles.title} ${hidden ? styles.hidden : ""} `}
      style={{
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        fontSize: `${fontSize}px`,
      }}
    >
      {text}
    </h1>
  );
}
