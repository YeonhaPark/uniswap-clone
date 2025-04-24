import * as React from "react";
const SvgComponent = () => (
  <svg
    fill="none"
    strokeWidth={2}
    style={{
      width: 24,
      height: 24,
      color: "currentColor",
      transform: "rotateZ(0deg)",
    }}
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 5v14M19 12l-7 7-7-7"
    />
  </svg>
);
export default SvgComponent;
