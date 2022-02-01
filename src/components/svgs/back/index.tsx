import { FC, SVGAttributes } from "react";

const Back: FC<SVGAttributes<SVGElement>> = (props) => (
  <svg
    width="5"
    height="8"
    viewBox="0 0 5 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5 0L0 4L5 8V0Z" fill="#ED3237" />
  </svg>
);

export default Back;
