import { FC, SVGAttributes } from "react";

const LogoutIcon: FC<SVGAttributes<SVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.99994 21H4.99994C4.46951 21 3.9608 20.7893 3.58573 20.4142C3.21065 20.0391 2.99994 19.5304 2.99994 19V5C2.99994 4.46957 3.21065 3.96086 3.58573 3.58579C3.9608 3.21071 4.46951 3 4.99994 3H8.99994"
      stroke="#4F4F4F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.9999 17L20.9999 12L15.9999 7"
      stroke="#4F4F4F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.9999 12H8.99994"
      stroke="#4F4F4F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LogoutIcon;
