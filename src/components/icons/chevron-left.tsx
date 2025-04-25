const SvgComponent = ({
  width = 24,
  height = 24,
  onClick,
}: {
  width?: number;
  height?: number;
  onClick?: () => void;
}) => (
  <div
    className="flex rotate-0 items-center justify-center rounded-full"
    onClick={onClick}
  >
    <svg
      style={{ width, height }}
      fill="none"
      strokeWidth={8}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.707 5.293a1 1 0 0 1 0 1.414L10.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);
export default SvgComponent;
