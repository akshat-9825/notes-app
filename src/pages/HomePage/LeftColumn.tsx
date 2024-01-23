import cn from "classnames";
import styles from "./left-column.module.scss";

const LeftColumn = () => {
  return (
    <div className={styles.left_column_container}>
      <div className={cn("m-t-m text-c", styles.header)}>Pocket Notes</div>
    </div>
  );
};

export default LeftColumn;
