import Title from "../../../components/title";
import styles from "./LessonPlan.module.css";
import { lessonPlans } from "../../../mock/lessonPlan";

interface ILessonProps {
  number: string;
  title: string;
  description: string;
  last: boolean;
}

function Lesson({ number, title, description, last = false }: ILessonProps) {
  return (
    <div className={`${styles.lesson} ${last ? styles.last : ""}`}>
      <span>{number}</span>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function LessonPlan() {
  return (
    <div className={styles.lessonPlan}>
      <Title text="LESSON PLAN" marginBottom={19} />
      <div className={styles.lessons}>
        {lessonPlans.map((lesson, index) => (
          <Lesson
            key={lesson.id}
            number={lesson.number}
            title={lesson.title}
            description={lesson.description}
            last={index === lessonPlans.length - 1}
          />
        ))}
        <button className={styles.viewAll}>VER TODOS</button>
      </div>
    </div>
  );
}
