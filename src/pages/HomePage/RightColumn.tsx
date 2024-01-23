import cn from "classnames";
import styles from "./right-column.module.scss";
import background from "@assets/right-placeholder.png";
import { IconLock } from "../../utils/Icons/IconLock";

const RightColumn = () => {
  return (
    <div
      className={cn(
        styles.right_column_container,
        "full-width column flex-ac"
      )}>
      <div className={cn(styles.right_section, "column flex-ac")}>
        <img
          src={background}
          alt="background-img"
          className={styles.background_img}
        />
        <div className={styles.header}>Pocket Notes</div>
        <div className={styles.sub_header}>
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

export default RightColumn;
