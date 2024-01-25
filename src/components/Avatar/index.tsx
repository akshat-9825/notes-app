import { useSelector } from "react-redux";
import classNames from "classnames";
import { selectGroupData } from "../../features/GroupSection/groupSlice";

import styles from "./avatar.module.scss";

const Avatar = ({ name, color }: { name: string; color: string }) => {
  const nameArr = name.split(" ");
  const avatarName =
    nameArr.length > 1 ? nameArr[0][0] + nameArr[1][0] : nameArr[0][0];

  const { selectedGroup } = useSelector(selectGroupData);

  return (
    <div
      style={{ backgroundColor: color }}
      className={classNames(styles.avatar, {
        [styles.avatar_navbar_mobile]: selectedGroup !== 0,
      })}>
      {avatarName}
    </div>
  );
};

export default Avatar;
