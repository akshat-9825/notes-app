import cn from "classnames";
import Avatar from "../Avatar";

import styles from "./group.module.scss";

const Group = ({
  name,
  color,
  selected = false,
  onClick,
}: {
  name: string;
  color: string;
  selected?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn("row flex-ac cursor", styles.group_container, {
        [styles.selected]: selected,
      })}>
      <Avatar name={name} color={color} />
      <div>{name}</div>
    </div>
  );
};

export default Group;
