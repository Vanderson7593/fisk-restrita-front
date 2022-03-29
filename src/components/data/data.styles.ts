import styled from "@emotion/styled";
import { Flex as FlexElement } from "modules/elements";

export const Flex = styled(FlexElement)`
  .box {
    background: #fff;
  }
  .description {
    color: #333333;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
  }
`;

export const Title = styled("p")`
  font-size: 2rem;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0em;
  padding-bottom: 15px;
  color: #ed3237;
`;

export const DataItem = styled(FlexElement)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  margin-right: 7px;
  gap: 7px;

  a {
    display: flex;
    gap: 7px;
    align-items: center;

    p {
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: 18px;
      letter-spacing: 0em;
    }
  }
`;
