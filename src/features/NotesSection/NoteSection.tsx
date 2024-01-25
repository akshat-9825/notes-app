import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import cn from "classnames";
import {
  GroupItem,
  selectGroupData,
  setSelectedGroup,
} from "../GroupSection/groupSlice";
import { NoGroupSelected } from "./NoGroupSelected";
import { selectNotesData } from "./notesSlice";
import Chatbar from "../../components/Chatbar";
import Navbar from "../../components/Navbar";
import Note from "../../components/Note";

import styles from "./note-section.module.scss";

const NoteSection = () => {
  const [inputValue, setInputValue] = useState("");
  const { slug: currentSlug } = useParams();
  const { groups, selectedGroup: currIndex } = useSelector(selectGroupData);
  const { selectNotes } = useSelector(selectNotesData);
  const dispatch = useDispatch();

  const notes = useMemo(
    () => selectNotes[currIndex] || [],
    [currIndex, selectNotes]
  );

  const groupSelected = useMemo(
    () =>
      currentSlug !== undefined
        ? groups.find((g: GroupItem) => g.slug === currentSlug)
        : null,
    [groups, currentSlug]
  );

  useEffect(() => {
    if (currentSlug && groupSelected) {
      dispatch(setSelectedGroup(groupSelected.id));
    }
  }, [currentSlug, dispatch, groupSelected]);

  if (currentSlug) {
    if (groupSelected) {
      return (
        <div
          className={cn(
            styles.right_column_container,
            "full-width space-between column"
          )}>
          <Navbar
            name={groupSelected.name || ""}
            color={groupSelected.color || ""}
          />
          <div
            className={cn(
              "column full-width full-height styled_scrollbar",
              styles.notes_container
            )}>
            {notes &&
              notes.map(
                ({
                  id,
                  content,
                  time,
                }: {
                  id: string;
                  content: string;
                  time: string;
                }) => {
                  const dateTime = new Date(time);
                  return (
                    <Note key={id} content={content} dateTime={dateTime} />
                  );
                }
              )}
          </div>
          <Chatbar inputValue={inputValue} setInputValue={setInputValue} />
        </div>
      );
    } else {
      return <Navigate to="/" />;
    }
  }

  return (
    <div className={cn(styles.right_column_container, "full-width")}>
      <NoGroupSelected />
    </div>
  );
};

export default NoteSection;
