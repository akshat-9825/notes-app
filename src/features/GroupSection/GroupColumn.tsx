import cn from "classnames";
import { selectGroupData, setSelectedGroup } from "./groupSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddGroupModal from "./AddGroupModal";
import Group from "../../components/Group";

import styles from "./group-column.module.scss";
import { Link } from "react-router-dom";

const GroupColumn = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { groups, selectedGroup } = useSelector(selectGroupData);

  return (
    <div
      className={cn(styles.left_column_container, "column relative flex-ac")}>
      <div className={cn("text-c", styles.heading)}>Pocket Notes</div>
      <div
        className={cn(styles.group_list, "column relative styled_scrollbar")}>
        {groups.map(
          ({
            id,
            name,
            color,
            slug,
          }: {
            id: number;
            name: string;
            color: string;
            slug: string;
          }) => (
            <Link key={id} to={`/group/${slug}`}>
              <Group
                selected={selectedGroup === id}
                onClick={() => dispatch(setSelectedGroup(id))}
                name={name}
                color={color}
              />
            </Link>
          )
        )}
      </div>
      <div
        className={cn(styles.plus_button, "absolute cursor row flex-c")}
        onClick={() => setShowModal(true)}>
        +
      </div>
      {showModal ? <AddGroupModal setShowModal={setShowModal} /> : null}
    </div>
  );
};

export default GroupColumn;
