import CourseCard from "./course-card";

import styles from "./MoreCourses.module.css";

import professorMarcus from "../../../assets/images/professor-marcus.png";
import professorIsmael from "../../../assets/images/professor-ismael.png";
import professorLewis from "../../../assets/images/professor-lewis.png";
import Title from "../../../components/title";
import useDynamicWidth from "../../../hooks/useDynamicWidth";

export default function MoreCourses() {
  const { dynamicWidth } = useDynamicWidth();

  return (
    <div className={styles.moreCourses}>
      <Title text="MÁS CURSOS" marginBottom={dynamicWidth < 768 ? 12 : 19} />
      <div>
        <a href="https://unycos.com/curso/piraguismo/" target="_blank">
          <CourseCard
            backgroundImage={professorMarcus}
            name="marcus cooper"
            course="piragüismo"
          />
        </a>
        <a href="https://unycos.com/curso/desarrollo-personal/" target="_blank">
          <CourseCard
            backgroundImage={professorIsmael}
            name="ismael cala"
            course="desarrollo personal"
          />
        </a>
        <a href="https://unycos.com/curso/maquillaje/" target="_blank">
          <CourseCard
            backgroundImage={professorLewis}
            name="lewis amarante"
            course="maquillaje"
          />
        </a>
      </div>
    </div>
  );
}
