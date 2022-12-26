import Banner from "./banner";

import Workload from "./workload";
import Slider from "./slider";
import ExclusiveContent from "./exclusive-content";

import styles from "./Introduction.module.css";

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      <Banner />
      <Workload />
      <Slider />
      <ExclusiveContent />
    </div>
  );
}
