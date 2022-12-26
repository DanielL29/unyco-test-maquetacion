import styles from "./Comment.module.css";

import silverLike from "../../../../assets/images/silver-like.png";
import { StudentComment } from "../../../../mock/studentComments";
import SubComment from "../sub-comment";
import useDynamicWidth from "../../../../hooks/useDynamicWidth";

type ICommentProps = Omit<StudentComment, "id">;

export default function Comment({
  name,
  profileImage,
  comment,
  pastTime,
  subComment,
}: ICommentProps) {
  const { dynamicWidth } = useDynamicWidth();

  function shortName(name: string) {
    const nameArray = name.split(" ");

    if (nameArray[0].length > 6) {
      return nameArray[0][0];
    }

    return `${nameArray[0][0]}${nameArray[1][0]}`;
  }

  function onlyFirstName(name: string) {
    const nameArray = name.split(" ");

    return `${nameArray[0]} ${nameArray[1][0]}.`;
  }

  return (
    <div className={styles.comment}>
      <div className={styles.profile}>
        {profileImage ? (
          <img src={profileImage} alt="profile" />
        ) : (
          shortName(name)
        )}
      </div>
      <div className={styles.content}>
        <div>
          <h3>{dynamicWidth < 768 ? onlyFirstName(name) : name}</h3>
          <img src={silverLike} alt="silver-like" />
          <h4>{`HACE ${pastTime} MESES`}</h4>
        </div>
        <p>{comment}</p>
        <SubComment
          subComment={subComment}
          pastTime={pastTime}
          hidden={dynamicWidth < 768}
        />
      </div>
    </div>
  );
}
