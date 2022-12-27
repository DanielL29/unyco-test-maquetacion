import styles from "./ExclusiveContent.module.css";
import NamedIcon from "../../../../components/named-icon";
import Button from "../../../../components/button";

import book from "../../../../assets/images/book.png";
import icon360 from "../../../../assets/images/360.png";
import tests from "../../../../assets/images/tests.png";
import tasks from "../../../../assets/images/tasks.png";
import Title from "../../../../components/title";
import useDynamicWidth from "../../../../hooks/useDynamicWidth";

export default function ExclusiveContent() {
  const { dynamicWidth } = useDynamicWidth();

  return (
    <div className={styles.exclusiveContent}>
      <Title
        text="CONTENIDO EXCLUSIVO"
        marginBottom={38}
        hidden={dynamicWidth < 768}
      />
      <div className={styles.icons}>
        <NamedIcon
          text="E-books"
          icon={book}
          position="vertical"
          small={dynamicWidth < 768}
        />
        <NamedIcon
          text="360° Videos"
          icon={icon360}
          position="vertical"
          small={dynamicWidth < 768}
        />
        <NamedIcon
          text="Tests"
          icon={tests}
          position="vertical"
          small={dynamicWidth < 768}
        />
        <NamedIcon
          text="Tareas"
          icon={tasks}
          position="vertical"
          small={dynamicWidth < 768}
        />
      </div>
      <Button children="MAS INFORMACIÓN" />
    </div>
  );
}
