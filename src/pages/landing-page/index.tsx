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
      <section>
        <Introduction />
      </section>
      <section>
        <LessonPlan />
      </section>
      <section>
        <MoreCourses />
      </section>
      <section>
        <MoreInformation />
      </section>
      <section>
        <StudentComments />
      </section>
      <section>
        <RelationArticles />
      </section>
    </main>
  );
}
