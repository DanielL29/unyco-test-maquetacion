import Title from "../../../components/title";
import Comment from "./comment";
import Button from "../../../components/button";

import styles from "./StudentComments.module.css";

import golderLike from "../../../assets/images/golden-like.png";

import { studentComments } from "../../../mock/studentComments";

import useDynamicWidth from "../../../hooks/useDynamicWidth";

export default function StudentComments() {
  const { dynamicWidth } = useDynamicWidth();

  return (
    <div className={styles.studentComments}>
      <Title
        text={
          dynamicWidth < 768
            ? "Comentários de Usuários"
            : "Comentarios de los estudiantes"
        }
        marginBottom={dynamicWidth < 768 ? 8 : 16}
      />
      <div className={styles.valorization}>
        <img src={golderLike} alt="golden-like" />
        <h2>
          <span>98.7% de valoraciones positivas</span> / total de 726
          valoraciones
        </h2>
      </div>
      <div className={styles.comments}>
        {studentComments.map((comment) => (
          <Comment
            key={comment.id}
            name={comment.name}
            profileImage={comment.profileImage}
            pastTime={comment.pastTime}
            comment={comment.comment}
            subComment={comment.subComment}
          />
        ))}
      </div>
      <Button
        children="VER MÁS"
        theme="transparent"
        width={180}
        height={40}
        fontSize={12}
        marginBottom={34}
        hidden={dynamicWidth < 768}
      />
    </div>
  );
}
