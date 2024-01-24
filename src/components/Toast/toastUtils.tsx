import ReactDOM from "react-dom";
import Toast, { ToastProps } from ".";

export const defaultDuration = 3000;
export const showToast = (
  props: Omit<ToastProps, "toastVisible" | "setToastVisible">
) => {
  const root = document.documentElement;
  root?.style.setProperty(
    "--animation-time",
    `${props.duration || defaultDuration}ms`
  );
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
