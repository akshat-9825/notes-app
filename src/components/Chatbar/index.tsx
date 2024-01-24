import cn from "classnames";
import styles from "./chatbar.module.scss";
import { IconSend } from "../../utils/Icons/IconSend";

const Chatbar = ({
  inputValue,
  setInputValue,
}: {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
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
        />
      </div>
    </div>
  );
};

export default Chatbar;
