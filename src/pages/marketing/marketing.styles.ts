import styled from "@emotion/styled";
import { Flex as FlexElement } from "modules/elements";

export const Flex = styled(FlexElement)`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Container = styled(Flex)`
  display: flex;
  width: 1360px;

  .menu-vertical {
    border-right: 0.7px solid #bdbdbd;
    background: var(--white-1);
    width: 296px;

    .menu-vertical-container div {
      display: flex;
      justify-content: left;
      align-items: center;
      padding: 10px 0 10px 20px;
      width: 290px;
    }
    .menu-vertical-container div:hover {
      background: #f0f0f0;
    }

    .menu-vertical-container div:first-child {
      margin-top: 40px;
    }

    .menu-vertical-container svg {
      width: 23px;
    }

    .menu-vertical-container a {
      font-size: 0.875rem;
      font-weight: 300;
      color: #333;
      padding: 0 0 0 15px;
      transition: all 0.2s;
    }
    .menu-vertical-container a:hover {
      color: #ed3237;
    }
  }

  .wrapper {
    width: 1064px;
  }
`;
