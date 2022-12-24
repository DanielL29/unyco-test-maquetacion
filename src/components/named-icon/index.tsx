import styles from "./NamedIcon.module.css";

interface INamedIconProps {
  text: string;
  icon: string;
  position?: "horizontal" | "vertical";
}

export default function NamedIcon({
  text,
  icon,
  position = "horizontal",
}: INamedIconProps) {
  return (
    <div className={`${styles.namedIcon} ${styles[position]}`}>
      <img src={icon} alt="opened-book" />
      <p>{text}</p>
    </div>
  );
}
