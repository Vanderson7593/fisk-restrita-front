import { FC, SVGAttributes } from "react";

const ArrowRight: FC<SVGAttributes<SVGElement>> = (props) => (
  <svg
    width="8"
    height="14"
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 13L7 7L1 1"
      stroke="#ED3237"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRight;
