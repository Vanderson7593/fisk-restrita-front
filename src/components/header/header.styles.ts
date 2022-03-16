import styled from "@emotion/styled";
import { theme } from "@theme";

export const TopList = styled("ul")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 30px;
  background: #ed3237;
  height: 30px;

  li {
    display: flex;

    a {
      font-size: 0.8rem;
      font-weight: 500;
      color: #fff;
      transition: 0.5s;

      &:hover {
        cursor: pointer;
        font-size: 0.85rem;
      }
    }
  }
`;

export const BottomList = styled("ul")`
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 20px;
  border-top: 0.7px solid #bdbdbd;
  border-bottom: 0.7px solid #bdbdbd;
  height: 40px;

  li {
    padding: 6px;
    display: flex;
    align-self: space-between;

    a {
      font-size: 0.875rem;
      font-weight: 300;
      color: #333;
      transition: 0.5s;

      &:hover {
        cursor: pointer;
        color: #ed3237;
      }
    }
  }
`;
