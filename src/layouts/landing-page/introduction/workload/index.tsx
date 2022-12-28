import NamedIcon from "../../../../components/named-icon";
import openedBook from "../../../../assets/images/opened-book.png";
import schedule from "../../../../assets/images/schedule.png";
import styles from "./Workload.module.css";
import Button from "../../../../components/button";

import useDynamicWidth from "../../../../hooks/useDynamicWidth";
import Title from "../../../../components/title";

export default function Workload() {
  const { dynamicWidth } = useDynamicWidth();

  return (
    <div className={styles.workload}>
      <div className={styles.belowSection}>
        <NamedIcon text="12 MÓDULOS" icon={openedBook} />
        <NamedIcon text="+3.5 HORAS" icon={schedule} />
      </div>
      <Button
        children={
          dynamicWidth < 768 ? "SOLICITAR INFORMACIÓN" : "MAS INFORMACIÓN"
        }
        fontSize={dynamicWidth < 768 ? 12 : 16}
      />
      <div className={styles.mobileWorkload}>
        <Title
          text="APRENDE NATACIÓN CON UNA CAMPEONA OLÍMPICA"
          marginTop={29}
          marginBottom={36}
          hidden={dynamicWidth > 768}
        />
        <Button
          children="PREGUNTAS FRECUENTES"
          theme="transparent"
          fontSize={dynamicWidth < 768 ? 12 : 16}
        />
      </div>
    </div>
  );
}
