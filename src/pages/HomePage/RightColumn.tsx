import cn from "classnames";
import styles from "./right-column.module.scss";
import background from "@assets/right-placeholder.png";

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
    </div>
  );
};

export default RightColumn;
