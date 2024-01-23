import cn from "classnames";
import styles from "./modal.module.scss";

const Modal = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn(styles.modal_overlay, "absolute")}>
      <div className={cn(styles.modal_container, className, "absolute")}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
