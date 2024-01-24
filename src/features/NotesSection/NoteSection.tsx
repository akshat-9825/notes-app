import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import cn from "classnames";
import { GroupItem, selectGroupData } from "../GroupSection/groupSlice";
import { NoGroupSelected } from "./NoGroupSelected";

import styles from "./note-section.module.scss";
import Navbar from "../../components/Navbar";

const NoteSection = () => {
  const { slug } = useParams();
  const { groups } = useSelector(selectGroupData);

  const groupSelected =
    slug !== undefined ? groups.find((g: GroupItem) => g.slug === slug) : null;

  if (slug) {
    return (
      <div className={cn(styles.right_column_container, "full-width")}>
        <Navbar name={groupSelected.name} color={groupSelected.color} />
      </div>
    );
  }

  return (
    <div className={cn(styles.right_column_container, "full-width")}>
      <NoGroupSelected />
    </div>
  );
};

export default NoteSection;
