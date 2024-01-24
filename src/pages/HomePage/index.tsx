import cn from "classnames";
import GroupColumn from "../../features/GroupSection/GroupColumn";
import RightColumn from "./RightColumn";

import styles from "./home-page.module.scss";

const HomePage = () => {
  return (
    <div className={cn(styles.home_container, "row full-width full-height")}>
      <GroupColumn />
      <RightColumn />
    </div>
  );
};

export default HomePage;
