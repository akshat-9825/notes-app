import cn from "classnames";
import { addNote } from "../../features/NotesSection/notesSlice";
import { IconSend } from "../../utils/Icons/IconSend";
import { selectGroupData } from "../../features/GroupSection/groupSlice";
import { useDispatch, useSelector } from "react-redux";

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
          value={inputValue}
        />
        <IconSend
          disabled={inputValue === ""}
          className={cn("absolute", styles.send_icon, {
            cursor: inputValue !== "",
          })}
          onClick={() => {
            if (inputValue !== "") {
              dispatch(
                addNote({
                  content: inputValue,
                  groupId: selectedGroup,
                })
              );
            }
          }}
        />
      </div>
    </div>
  );
};

export default Chatbar;
