import styles from "./SubComment.module.css";

import checkmark from "../../../../assets/images/checkmark.png";

interface ISubCommentProps {
  subComment?: {
    comment: string;
    name: string;
    role?: string;
  };
  pastTime: number;
  hidden: boolean;
}

export default function SubComment({
  subComment,
  pastTime,
  hidden,
}: ISubCommentProps) {
  if (subComment && !hidden) {
    return (
      <div className={styles.subComment}>
        <p>{subComment.comment}</p>
        <div>
          <img src={checkmark} alt="checkmark" />
          <h3 className={subComment.role ? styles.role : ""}>
            {subComment.name}
            {subComment.role ? <span>{subComment.role}</span> : ""}
          </h3>
          <h5> - hace {pastTime} meses</h5>
        </div>
      </div>
    );
  } else if (hidden) {
    return <></>;
  }

  return <></>;
}
