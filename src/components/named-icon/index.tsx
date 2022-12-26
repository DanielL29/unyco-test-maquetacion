import styles from "./NamedIcon.module.css";

interface INamedIconProps {
  text: string;
  icon: string;
  small?: boolean;
  position?: "horizontal" | "vertical";
}

export default function NamedIcon({
  text,
  icon,
  small,
  position = "horizontal",
}: INamedIconProps) {
  return (
    <div
      className={`${styles.namedIcon} ${styles[position]} ${
        small ? styles.small : ""
      }`}
    >
      <img src={icon} alt="opened-book" />
      <p>{text}</p>
    </div>
  );
}
