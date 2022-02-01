import { FC, SVGAttributes } from "react";

const Power: FC<SVGAttributes<SVGElement>> = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.77 4.98047C14.7138 5.92456 15.3564 7.1273 15.6167 8.43661C15.877 9.74592 15.7432 11.103 15.2322 12.3363C14.7213 13.5696 13.8561 14.6236 12.7461 15.3652C11.6361 16.1068 10.3312 16.5027 8.99625 16.5027C7.66132 16.5027 6.35636 16.1068 5.24638 15.3652C4.1364 14.6236 3.27123 13.5696 2.76027 12.3363C2.24932 11.103 2.11552 9.74592 2.37579 8.43661C2.63606 7.1273 3.27872 5.92456 4.2225 4.98047"
      stroke="#ED3237"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 1.5V9"
      stroke="#ED3237"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Power;
