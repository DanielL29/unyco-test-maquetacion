import styles from "./Lesson.module.css";

import arrowRight from "../../../../assets/images/arrow-right.png";
import useDynamicWidth from "../../../../hooks/useDynamicWidth";

interface ILessonProps {
  number: string;
  title: string;
  description: string;
  last: boolean;
}

export default function Lesson({
  number,
  title,
  description,
  last = false,
}: ILessonProps) {
  const { dynamicWidth } = useDynamicWidth();

  function pascalCaseTitle(title: string) {
    return `${title[0].toUpperCase()}${title.toLowerCase().substring(1)}`;
  }

  return (
    <div className={`${styles.lesson} ${last ? styles.last : ""}`}>
      <span>{number}</span>
      <div>
        <h2>{dynamicWidth < 768 ? pascalCaseTitle(title) : title}</h2>
        <p>{description}</p>
        <img src={arrowRight} alt="arrow-right" />
      </div>
    </div>
  );
}
