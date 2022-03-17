import { Flex, View } from "modules/elements";
import { FC, SVGAttributes } from "react";

const ArrowTop: FC<SVGAttributes<SVGElement>> = ({ color }) => (
  <Flex>
    <svg
      width="17"
      height="10"
      viewBox="0 0 17 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.16211L8.5 8.16211L16 1.16211"
        stroke="#4F4F4F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Flex>
);

export default ArrowTop;
