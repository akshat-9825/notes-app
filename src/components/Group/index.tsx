import cn from "classnames";
import Avatar from "../Avatar";

import styles from "./group.module.scss";

const Group = ({ name, color }: { name: string; color: string }) => {
  return (
    <div className={cn("row flex-ac cursor", styles.group_container)}>
      <Avatar name={name} color={color} />
      <div>{name}</div>
    </div>
  );
};

export default Group;
