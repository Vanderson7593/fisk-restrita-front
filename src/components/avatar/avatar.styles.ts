import styled from "@emotion/styled";
import { Flex as FlexElement } from "modules/elements";

export const Flex = styled(FlexElement)`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 75px;

  .avatarTitle {
    margin-left: 64px;
    text-align: right;

    h1 {
      font-size: 0.8rem;
      font-weight: 500;
      color: #333333;
    }

    h2 {
      font-size: 0.7rem;
      font-weight: 300;
      color: #333333;
    }
  }

  .avatarImage {
    margin-left: 15px;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
  }
`;
