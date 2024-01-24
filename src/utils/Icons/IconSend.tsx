import { memo } from "react";

export const IconSend = memo<
  JSX.IntrinsicElements["svg"] & { disabled: boolean }
>(({ width = "35", height = "29", className, onClick, disabled = true }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 35 29"
    className={className}
    onClick={onClick}>
    <path
      d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z"
      fill={disabled ? "#ABABAB" : "#001F8B"}
    />
  </svg>
));
