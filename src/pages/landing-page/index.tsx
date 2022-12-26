import Introduction from "../../layouts/landing-page/introduction";
import LessonPlan from "../../layouts/landing-page/lesson-plan";
import MoreCourses from "../../layouts/landing-page/more-courses";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <main className={styles.landingPage}>
      <section>
        <Introduction />
      </section>
      <section>
        <LessonPlan />
      </section>
      <section>
        <MoreCourses />
      </section>
    </main>
  );
}
