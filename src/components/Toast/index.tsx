import { useEffect, useState } from "react";
import cn from "classnames";
import { defaultDuration } from "./toastUtils";

import styles from "./toast.module.scss";

export interface ToastProps {
  className?: string;
  duration?: number;
  message: string;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  status?: "success" | "error"; // New prop for status
}

const Toast: React.FC<ToastProps> = ({
  className,
  duration = defaultDuration,
  message,
  position = "top-right",
  status,
}) => {
  const [toastVisible, setToastVisible] = useState(true);

  useEffect(() => {
    if (toastVisible) {
      const timeoutId = setTimeout(() => {
        setToastVisible(false);
      }, duration);

      return () => clearTimeout(timeoutId);
    }
  }, [duration, toastVisible]);

  return toastVisible ? (
    <div
      className={cn(
        styles.toastContainer,
        className,
        position === "top-right" && styles.topRight,
        position === "top-left" && styles.topLeft,
        position === "bottom-right" && styles.bottomRight,
        position === "bottom-left" && styles.bottomLeft,
        status === "success" && styles.success,
        status === "error" && styles.error
      )}>
      {status === "success" && <span className={styles.icon}>✅</span>}
      {status === "error" && <span className={styles.icon}>❌</span>}
      {message}
    </div>
  ) : null;
};

export default Toast;
