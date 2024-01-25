import classNames from "classnames";
import Group, { GroupProps } from "../Group";
import { IconArrow } from "../../utils/Icons/IconArrow";
import useMediaQuery from "../../hooks/useMediaQuery";

import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = (props: GroupProps & { className?: string }) => {
  const { tablet, mobile } = useMediaQuery();

  return (
    <div className={classNames("row full-width flex-ac", styles.navbar)}>
      {tablet || mobile ? (
        <Link to="/">
          <IconArrow className={styles.icon_arrow} />
        </Link>
      ) : null}
      <Group
        name={props.name}
        color={props.color}
        className={classNames(props.className, styles.navbar_group)}
      />
    </div>
  );
};

export default Navbar;
