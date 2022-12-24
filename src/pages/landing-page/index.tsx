import Introduction from "../../layouts/landing-page/introduction";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <main className={styles.landingPage}>
      <section>
        <Introduction />
      </section>
    </main>
  );
}
