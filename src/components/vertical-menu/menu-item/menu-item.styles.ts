import styled from "@emotion/styled";
import { Flex } from "modules/elements";

export const Item = styled(Flex)`
  align-items: center;
  justify-content: center;
  cursor: pointer;

  p {
    color: #333;
    font-weight: 300px;
    font-size: 0.8rem;
  }

  svg {
    margin-right: 20px;
  }
`;
