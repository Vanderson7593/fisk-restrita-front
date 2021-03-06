import { FC, SVGAttributes } from "react";

const Img: FC<SVGAttributes<SVGElement>> = (props) => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.5 1H1V22.5H22.5V1Z" fill="white" />
    <path
      d="M22.5 1H1V22.5H22.5V1Z"
      stroke="#1078FF"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M1 17.7227H22.5"
      stroke="#1078FF"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M16 6.30078L11.2 14.3008L7.2 12.7008L4 17.5008H20L16 6.30078Z"
      fill="#CCE7FF"
      stroke="#1078FF"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M8 7.66667L6 9L4 7.66667V5.44444L6 4L8 5.44444V7.66667Z"
      fill="#CCE7FF"
      stroke="#1078FF"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Img;
