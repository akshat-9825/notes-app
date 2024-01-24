import classNames from "classnames";
import Group, { GroupProps } from "../Group";

import styles from "./navbar.module.scss";

const Navbar = (props: GroupProps & { className?: string }) => {
  return (
    <div className={classNames("row full-width", styles.navbar)}>
      <Group
        name={props.name}
        color={props.color}
        className={classNames(props.className, styles.navbar_group)}
      />
    </div>
  );
};

export default Navbar;
