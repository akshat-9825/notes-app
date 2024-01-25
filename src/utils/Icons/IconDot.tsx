import { memo } from "react";

export const IconDot = memo<JSX.IntrinsicElements["svg"]>(
  ({ width = 8, height = 8, className, onClick, color }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 8 8"
      fill={color}
      className={className}
      onClick={onClick}>
      <circle cx="4" cy="4" r="4" fill="#353535" />
    </svg>
  )
);
