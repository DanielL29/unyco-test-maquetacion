import styles from "./ExclusiveContent.module.css";
import NamedIcon from "../../../../components/named-icon";
import Button from "../../../../components/button";

import book from "../../../../assets/images/book.png";
import icon360 from "../../../../assets/images/360.png";
import tests from "../../../../assets/images/tests.png";
import tasks from "../../../../assets/images/tasks.png";

export default function ExclusiveContent() {
  return (
    <div className={styles.exclusiveContent}>
      <h1>CONTENIDO EXCLUSIVO</h1>
      <div className={styles.icons}>
        <NamedIcon text="E-BOOKS" icon={book} position="vertical" />
        <NamedIcon text="360° VIDEOS" icon={icon360} position="vertical" />
        <NamedIcon text="TESTS" icon={tests} position="vertical" />
        <NamedIcon text="TAREAS" icon={tasks} position="vertical" />
      </div>
      <Button text="MAS INFORMACIÓN" />
    </div>
  );
}
