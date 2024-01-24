import { createRoot } from "react-dom/client";
import Toast, { ToastProps } from ".";

export const defaultDuration = 3000;
export const showToast = (props: ToastProps) => {
  const root = document.documentElement;
  root?.style.setProperty(
    "--animation-time",
    `${props.duration || defaultDuration}ms`
  );
  const container = document.createElement("div");
  const rootElement = createRoot(container);

  const closeToast = () => {
    document.body.removeChild(container);
  };
  const toastComponent = (
    <Toast {...props} duration={props.duration || defaultDuration} />
  );

  document.body.appendChild(container);
  rootElement.render(toastComponent);

  setTimeout(() => {
    closeToast();
  }, props.duration || defaultDuration);
};
