import { useDispatch, useSelector } from "react-redux";
import { KeyboardEvent, useCallback } from "react";
import cn from "classnames";
import { addNote } from "../../features/NotesSection/notesSlice";
import { IconSend } from "../../utils/Icons/IconSend";
import { selectGroupData } from "../../features/GroupSection/groupSlice";
import { showToast } from "../Toast/toastUtils";

import styles from "./chatbar.module.scss";

const Chatbar = ({
  inputValue,
  setInputValue,
}: {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const dispatch = useDispatch();
  const { selectedGroup } = useSelector(selectGroupData);

  const handleSend = useCallback(() => {
    if (inputValue !== "") {
      dispatch(
        addNote({
          content: inputValue,
          groupId: selectedGroup,
        })
      );
      showToast({
        message: "Note added successfully",
        status: "success",
      });
      setInputValue("");
    }
  }, [dispatch, inputValue, selectedGroup, setInputValue]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  return (
    <div className={cn(styles.chatbar_container, "full-width")}>
      <div className="relative full-width full-height">
        <textarea
          placeholder="Enter your text here..."
          className={cn(
            styles.chatbar,
            "column full-width full-height styled_scrollbar"
          )}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          value={inputValue}
        />
        <IconSend
          disabled={inputValue === ""}
          className={cn("absolute", styles.send_icon, {
            cursor: inputValue !== "",
          })}
          onClick={handleSend}
        />
      </div>
    </div>
  );
};

export default Chatbar;
