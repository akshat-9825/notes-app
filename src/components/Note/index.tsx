import { useMemo } from "react";
import cn from "classnames";
import { IconDot } from "../../utils/Icons/IconDot";

import styles from "./note.module.scss";

const Note = ({ content, dateTime }: { content: string; dateTime: Date }) => {
  const currDate = useMemo(() => {
    const date = new Date(dateTime);
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
    } as const;
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate;
  }, [dateTime]);

  const currTime = useMemo(() => {
    const date = new Date(dateTime);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    } as const;
    const formattedTime = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedTime;
  }, [dateTime]);

  return (
    <div
      className={cn(styles.note_container, "column full-width space-between")}>
      <div className={cn(styles.note, "full-width")}>{content}</div>
      <div className={cn("full-width row flex-ac", styles.date_section)}>
        <div>{currDate}</div>
        <IconDot className={cn("m-l-xs m-r-xs", styles.dot)} />
        <div>{currTime}</div>
      </div>
    </div>
  );
};

export default Note;
