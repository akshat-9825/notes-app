import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";
import { setSelectedGroup } from "../../features/GroupSection/groupSlice";
import GroupColumn from "../../features/GroupSection/GroupColumn";
import NoteSection from "../../features/NotesSection/NoteSection";

import styles from "./home-page.module.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    if (slug === undefined) {
      dispatch(setSelectedGroup(0));
    }
  }, [dispatch, slug]);

  return (
    <div className={cn(styles.home_container, "row full-width full-height")}>
      <GroupColumn />
      <NoteSection />
    </div>
  );
};

export default HomePage;
