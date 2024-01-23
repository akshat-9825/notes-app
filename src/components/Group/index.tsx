import cn from "classnames";
import Avatar from "../Avatar";

import styles from "./group.module.scss";

const Group = ({ name }: { name: string }) => {
  return (
    <div className={cn("row flex-ac cursor", styles.group_container)}>
      <Avatar name={name} />
      <div>{name}</div>
    </div>
  );
};

export default Group;
