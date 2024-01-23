import cn from "classnames";
import { addGroup, selectGroupData } from "./groupSlice";
import { useDispatch, useSelector } from "react-redux";
import Group from "../../components/Group";

import styles from "./left-column.module.scss";

const LeftColumn = () => {
  const dispatch = useDispatch();
  const { groups } = useSelector(selectGroupData);

  return (
    <div
      className={cn(styles.left_column_container, "column relative flex-ac")}>
      <div className={cn("text-c", styles.header)}>Pocket Notes</div>
      <div className={cn(styles.group_list, "column relative")}>
        {groups.map((group) => (
          <Group key={group.id} name={group.name} />
        ))}
      </div>
      <div
        className={cn(styles.plus_button, "absolute cursor row flex-c")}
        onClick={() => dispatch(addGroup("New Group"))}>
        +
      </div>
    </div>
  );
};

export default LeftColumn;
