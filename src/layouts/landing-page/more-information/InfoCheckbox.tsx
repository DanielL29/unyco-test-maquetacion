import { ReactNode, SyntheticEvent } from "react";
import styles from "./MoreInformation.module.css";

interface IInfoCheckbox {
  name: string;
  children: ReactNode;
  onChange: (e: SyntheticEvent) => void;
}

export default function InfoCheckbox({
  name,
  children,
  onChange,
}: IInfoCheckbox) {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        name={name}
        onChange={onChange}
        required={name === "acceptCondition"}
      />
      <p>{children}</p>
    </label>
  );
}
