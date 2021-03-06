import { Flex, View } from "modules/elements";
import { FC, SVGAttributes } from "react";

const Check: FC<SVGAttributes<SVGElement>> = ({ color }) => (
  <Flex>
    <svg
      width="44"
      height="18"
      viewBox="0 0 44 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="42"
        height="16"
        rx="8"
        stroke="#4F4F4F"
        strokeWidth="2"
      />
      <circle cx="10" cy="9" r="5" fill="#4F4F4F" />
    </svg>
  </Flex>
);

export default Check;
