import ReactDOM from "react-dom";
import Toast, { ToastProps } from ".";

export const defaultDuration = 2500;
export const showToast = (
  props: Omit<ToastProps, "toastVisible" | "setToastVisible">
) => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const closeToast = () => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  };

  const toastComponent = (
    <Toast {...props} duration={props.duration || defaultDuration} />
  );

  ReactDOM.render(toastComponent, container);

  setTimeout(() => {
    closeToast();
  }, props.duration || defaultDuration);
};
