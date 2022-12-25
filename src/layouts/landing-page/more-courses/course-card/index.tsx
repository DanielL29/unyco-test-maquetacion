import { Properties } from "csstype";
import styles from "./CourseCard.module.css";

interface ICourseCardProps {
  backgroundImage: string;
  name: string;
  course: string;
}

export default function CourseCard({
  backgroundImage,
  name,
  course,
}: ICourseCardProps) {
  const backgroundStyleProps: Properties = {
    background: `linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 51.04%,
      rgba(0, 0, 0, 0.9) 100%
    ), url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    objectFit: "cover",
  };

  return (
    <div className={styles.courseCard} style={backgroundStyleProps}>
      <h2>{name}</h2>
      <h3>{course}</h3>
    </div>
  );
}
