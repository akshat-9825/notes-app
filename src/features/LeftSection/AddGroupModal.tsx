import { useCallback, useEffect, useRef } from "react";
import { addGroup } from "./groupSlice";
import { useDispatch } from "react-redux";
import cn from "classnames";

import Modal from "../../components/Modal";

import styles from "./group-modal.module.scss";
const AddGroupModal = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleCreateBtn = useCallback(() => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value.trim();
      const firstCharIsAlphabet = /^[A-Za-z]/.test(inputValue.charAt(0));
      const isValidInput = /^[A-Za-z0-9 ]*$/.test(inputValue);

      if (inputValue !== "" && firstCharIsAlphabet && isValidInput) {
        dispatch(addGroup(inputValue));
        setShowModal(false);
      } else {
        alert(
          "Invalid group name! Please follow the specified rules:\n" +
            "- The first character must be an alphabet.\n" +
            "- Only alphabets, numbers, and spaces are allowed."
        );
        // You can also show a SnackBar here
      }
    } else {
      alert("Empty Text Not Allowed!");
    }
  }, [dispatch, setShowModal]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowModal]);

  return (
    <Modal>
      <div
        className={cn(
          styles.add_group_modal,
          "column full-height full-width relative"
        )}
        ref={modalRef}>
        <div className={styles.add_group_modal_header}>Create New group</div>
        <div className={cn(styles.add_group_modal_name_search, "row")}>
          Group Name
          <input
            placeholder="Enter group name"
            className={styles.add_group_modal_input}
            ref={inputRef}
          />
        </div>
        <div
          className={cn(
            styles.add_group_modal_name_search,
            styles.choose_color_margin,
            "row"
          )}>
          Choose colour
          <div>Colors</div>
        </div>
        <button
          className={cn(styles.create_btn, "absolute cursor")}
          onClick={handleCreateBtn}>
          Create
        </button>
      </div>
    </Modal>
  );
};

export default AddGroupModal;
