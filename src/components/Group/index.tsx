import cn from "classnames";
import Avatar from "../Avatar";

import styles from "./group.module.scss";

export interface GroupProps {
  name: string;
  color: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

const Group = ({
  name,
  color,
  selected = false,
  onClick,
  className,
}: GroupProps) => {
  return (
    <div
      onClick={onClick}
      className={cn("row flex-ac cursor", styles.group_container, className, {
        [styles.selected]: selected,
      })}>
      <Avatar name={name} color={color} />
      <div>{name}</div>
    </div>
  );
};

export default Group;
