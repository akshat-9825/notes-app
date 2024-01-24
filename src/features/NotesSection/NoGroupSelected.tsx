import cn from "classnames";
import styles from "./note-section.module.scss";
import background from "@assets/right-placeholder.png";
import { IconLock } from "../../utils/Icons/IconLock";

export const NoGroupSelected = () => {
  return (
    <div className={cn(styles.no_group_selected, "full-width column flex-ac")}>
      <div className={cn(styles.right_section, "column flex-ac")}>
        <img
          src={background}
          alt="background-img"
          className={styles.background_img}
        />
        <div className={styles.heading}>Pocket Notes</div>
        <div className={styles.sub_heading}>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </div>
      </div>
      <div className={cn(styles.footer, "row flex-c")}>
        <IconLock className={cn("relative", styles.lock_icon)} />
        end-to-end encrypted
      </div>
    </div>
  );
};
