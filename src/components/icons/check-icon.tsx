import * as React from "react";
const CheckIcon = ({ width, height }: { width?: number; height?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 20}
    height={height || 20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
export default CheckIcon;
