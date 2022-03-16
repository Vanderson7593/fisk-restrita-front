import { FC, SVGAttributes } from "react";

const MessageIcon: FC<SVGAttributes<SVGElement>> = (props) => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.6571 6.82129H12.6427M5.6571 11.4784H17.2998H5.6571Z"
      stroke="#4F4F4F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 21.1302V3.32854C1 2.71097 1.24533 2.1187 1.68201 1.68201C2.1187 1.24533 2.71097 1 3.32854 1H19.6283C20.2459 1 20.8382 1.24533 21.2749 1.68201C21.7115 2.1187 21.9569 2.71097 21.9569 3.32854V14.9712C21.9569 15.5888 21.7115 16.1811 21.2749 16.6178C20.8382 17.0545 20.2459 17.2998 19.6283 17.2998H6.77595C6.42694 17.2998 6.0824 17.3783 5.76782 17.5295C5.45324 17.6806 5.17665 17.9005 4.95852 18.173L2.24461 21.5657C2.15429 21.6789 2.03103 21.7612 1.89188 21.8013C1.75272 21.8413 1.60456 21.8372 1.46787 21.7894C1.33119 21.7415 1.21275 21.6524 1.12893 21.5343C1.04511 21.4163 1.00005 21.2751 1 21.1302V21.1302Z"
      stroke="#4F4F4F"
      strokeWidth="1.5"
    />
  </svg>
);

export default MessageIcon;
