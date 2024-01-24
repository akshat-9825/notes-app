import cn from "classnames";
import GroupColumn from "../../features/GroupSection/GroupColumn";
import NoteSection from "../../features/NotesSection/NoteSection";

import styles from "./home-page.module.scss";

const HomePage = () => {
  return (
    <div className={cn(styles.home_container, "row full-width full-height")}>
      <GroupColumn />
      <NoteSection />
    </div>
  );
};

export default HomePage;
