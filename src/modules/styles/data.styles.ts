import styled from "@emotion/styled";
import { Flex as FlexElement } from "modules/elements";

export const Flex = styled(FlexElement)`
  li {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-bottom: 7px;
  }
  .box {
    background: #fff;
  }
  .description {
    color: #333333;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
  }
`;

export const DataItem = styled(FlexElement)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  margin-right: 7px;
  gap: 7px;

  p {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0em;
  }

  a {
    display: flex;
    gap: 7px;
    align-items: center;

    p {
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 300;
      line-height: 18px;
      letter-spacing: 0em;
    }
  }
`;
