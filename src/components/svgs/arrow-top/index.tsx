import { Flex, View } from "modules/elements";
import { FC, SVGAttributes } from "react";

const ArrowTop: FC<SVGAttributes<SVGElement>> = ({ color }) => (
  <Flex>
    <svg
      width="17"
      height="9"
      viewBox="0 0 17 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 8L8.5 1L1 8"
        stroke="#4F4F4F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Flex>
);

export default ArrowTop;
