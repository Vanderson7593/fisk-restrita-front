import styled from "@emotion/styled";
import { Flex as FlexElement } from "modules/elements";

export const Flex = styled(FlexElement)`
  display: flex;

  #container-background {
    width: 100vw;
    min-height: 80vh;
    background-image: url("../../background.jpg");
    background-size: cover;
  }
`;

export const Container = styled(Flex)`
  display: flex;
  justify-content: start;
  width: 1360px;
  overflow: hidden;

  .menu-vertical {
    border-right: 0.7px solid #bdbdbd;
    width: 296px;
    background: #fff;

    li {
      list-style: none;
      font-size: 0.875rem;
      font-weight: 300;
      color: #333;
      padding: 10px 0 10px 20px;
      display: flex;
      align-items: center;
      margin-right: 8px;
    }

    li:first-child {
      margin-top: 40px;
    }
    li:hover {
      color: #ed3237;
      background: #f0f0f0;
    }

    .menuVerticalBtn {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    /* .menuVerticalBtn span {
      margin-right: 10px;
    } */
  }

  .wrapper {
    width: 1064px;
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }
`;
