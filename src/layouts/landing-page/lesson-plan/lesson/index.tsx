import styles from "./Lesson.module.css";

import arrowRight from "../../../../assets/images/arrow-right.png";

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
  return (
    <div className={`${styles.lesson} ${last ? styles.last : ""}`}>
      <span>{number}</span>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={arrowRight} alt="arrow-right" />
      </div>
    </div>
  );
}
