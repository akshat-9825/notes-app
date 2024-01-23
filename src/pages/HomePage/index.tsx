import cn from "classnames";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

import styles from "./home-page.module.scss";

const HomePage = () => {
  return (
    <div className={cn(styles.home_container, "row full-width full-height")}>
      <LeftColumn />
      <RightColumn />
    </div>
  );
};

export default HomePage;
