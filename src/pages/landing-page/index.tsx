import Introduction from "../../layouts/landing-page/introduction";
import LessonPlan from "../../layouts/landing-page/lesson-plan";
import MoreCourses from "../../layouts/landing-page/more-courses";
import MoreInformation from "../../layouts/landing-page/more-information";
import RelationArticles from "../../layouts/landing-page/relation-articles";
import StudentComments from "../../layouts/landing-page/student-comments";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <main className={styles.landingPage}>
      <section className={styles.introductionSection}>
        <Introduction />
      </section>
      <section className={styles.lessonPlanSection}>
        <LessonPlan />
      </section>
      <section className={styles.moreCoursesSection}>
        <MoreCourses />
      </section>
      <section className={styles.moreInformationSection}>
        <MoreInformation />
      </section>
      <section className={styles.studentCommentsSection}>
        <StudentComments />
      </section>
      <section className={styles.relationArticlesSection}>
        <RelationArticles />
      </section>
    </main>
  );
}
