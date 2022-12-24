import NamedIcon from "../../../../components/named-icon";
import openedBook from "../../../../assets/images/opened-book.png";
import schedule from "../../../../assets/images/schedule.png";
import styles from "./Workload.module.css";
import Button from "../../../../components/button";

import useDynamicWidth from "../../../../hooks/useDynamicWidth";

export default function Workload() {
  const { dynamicWidth } = useDynamicWidth();

  return (
    <div className={styles.workload}>
      <div className={styles.belowSection}>
        <NamedIcon text="12 MÓDULOS" icon={openedBook} />
        <NamedIcon text="+3.5 HORAS" icon={schedule} />
      </div>
      <Button
        text={dynamicWidth < 768 ? "SOLICITAR INFORMACIÓN" : "MAS INFORMACIÓN"}
      />
      <div className={styles.mobileWorkload}>
        <h3>APRENDE NATACIÓN CON UNA CAMPEONA OLÍMPICA</h3>
        <Button text="PREGUNTAS FRECUENTES" theme="transparent" />
      </div>
    </div>
  );
}
