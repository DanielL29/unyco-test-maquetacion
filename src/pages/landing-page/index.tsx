import Introduction from "../../layouts/landing-page/introduction";
import LessonPlan from "../../layouts/landing-page/lesson-plan";
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
    </main>
  );
}
