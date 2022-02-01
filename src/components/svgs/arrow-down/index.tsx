import { Flex, View } from "modules/elements";
import { FC, SVGAttributes } from "react";

const ArrowTop: FC<SVGAttributes<SVGElement>> = ({ color }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    borderRadius="50%"
    style={{
      backgroundColor: color || "#333333",
      width: 20,
      height: 20,
    }}
  >
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5L5 9L9 5"
        stroke="#E0E0E0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 1V9"
        stroke="#E0E0E0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Flex>
);

export default ArrowTop;
