import CourseCard from "./course-card";

import styles from "./MoreCourses.module.css";

import professorMarcus from "../../../assets/images/professor-marcus.png";
import professorIsmael from "../../../assets/images/professor-ismael.png";
import professorLewis from "../../../assets/images/professor-lewis.png";
import Title from "../../../components/title";

export default function MoreCourses() {
  return (
    <div className={styles.moreCourses}>
      <Title text="MÁS CURSOS" marginBottom={19} />
      <div>
        <CourseCard
          backgroundImage={professorMarcus}
          name="marcus cooper"
          course="piragüismo"
        />
        <CourseCard
          backgroundImage={professorIsmael}
          name="ismael cala"
          course="desarrollo personal"
        />
        <CourseCard
          backgroundImage={professorLewis}
          name="lewis amarante"
          course="maquillaje"
        />
      </div>
    </div>
  );
}
