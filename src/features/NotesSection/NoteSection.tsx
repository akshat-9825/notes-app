import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import cn from "classnames";
import { GroupItem, selectGroupData } from "../GroupSection/groupSlice";
import { NoGroupSelected } from "./NoGroupSelected";
import Navbar from "../../components/Navbar";
import Chatbar from "../../components/Chatbar";

import styles from "./note-section.module.scss";

const NoteSection = () => {
  const { slug } = useParams();
  const { groups } = useSelector(selectGroupData);
  const [inputValue, setInputValue] = useState("");

  const groupSelected =
    slug !== undefined ? groups.find((g: GroupItem) => g.slug === slug) : null;

  if (slug) {
    return (
      <div
        className={cn(
          styles.right_column_container,
          "full-width space-between column"
        )}>
        <Navbar name={groupSelected.name} color={groupSelected.color} />
        <Chatbar inputValue={inputValue} setInputValue={setInputValue} />
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
