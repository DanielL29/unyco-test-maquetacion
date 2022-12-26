import Title from "../../../components/title";
import Button from "../../../components/button";
import Lesson from "./lesson";

import styles from "./LessonPlan.module.css";

import { lessonPlans } from "../../../mock/lessonPlan";
import useDynamicWidth from "../../../hooks/useDynamicWidth";

import star from "../../../assets/images/star.png";

export default function LessonPlan() {
  const { dynamicWidth } = useDynamicWidth();

  function LessonButton() {
    if (dynamicWidth < 768) {
      return (
        <Button
          text="VER PROGRAMA COMPLETO"
          theme="transparent"
          marginTop={10}
        />
      );
    } else {
      return <button className={styles.viewAll}>VER TODOS</button>;
    }
  }

  return (
    <div className={styles.lessonPlan}>
      <Title
        text={dynamicWidth < 768 ? "DESTAQUES del curso" : "LESSON PLAN"}
        marginBottom={19}
      />
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
        <LessonButton />
        <div className={styles.mobileStudentSatisfaction}>
          <div>
            <img src={star} alt="star" />
            <h2>
              Los estudiantes le dan a Unycos una calificación promedio de 4.7
              de 5 estrellas.
            </h2>
          </div>
          <p>
            100% de garantía de satisfacción. 30 días de garantía de devolución
            de dinero.
          </p>
        </div>
      </div>
    </div>
  );
}
