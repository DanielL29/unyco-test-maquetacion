import styles from "./Preview.module.css";

interface IPreviewProps {
  spotlight: Spotlight;
}

export default function Preview({ spotlight }: IPreviewProps) {
  return (
    <div className={styles.content}>
      <img src={spotlight.image} alt="next-image" />
      <h2>{spotlight.title}</h2>
    </div>
  );
}
