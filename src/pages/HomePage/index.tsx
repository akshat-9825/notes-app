import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";
import {
  selectGroupData,
  setSelectedGroup,
} from "../../features/GroupSection/groupSlice";
import GroupColumn from "../../features/GroupSection/GroupColumn";
import NoteSection from "../../features/NotesSection/NoteSection";
import useMediaQuery from "../../hooks/useMediaQuery";

import styles from "./home-page.module.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { smallDesktop, desktop } = useMediaQuery();
  const { selectedGroup } = useSelector(selectGroupData);

  useEffect(() => {
    if (slug === undefined) {
      dispatch(setSelectedGroup(0));
    }
  }, [dispatch, slug]);

  if (desktop || smallDesktop) {
    return (
      <div className={cn(styles.home_container, "row full-width full-height")}>
        <GroupColumn />
        <NoteSection />
      </div>
    );
  } else {
    return (
      <div className={cn(styles.home_container, "row full-width full-height")}>
        {selectedGroup === 0 ? <GroupColumn /> : <NoteSection />}
      </div>
    );
  }
};

export default HomePage;
