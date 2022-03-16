import styled from "@emotion/styled";
import { Flex as FlexElement } from "modules/elements";

export const Flex = styled(FlexElement)`
  height: 30px;
  background: #fff;
  border-top: 0.7px solid #bdbdbd;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  p {
    font-size: 0.8rem;
    color: #4f4f4f;
  }
`;
