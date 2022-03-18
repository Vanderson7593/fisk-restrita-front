import styled from "@emotion/styled";
import { theme } from "@theme";

export const List = styled("ul")`
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 27px;
  /* margin-top: 25px; */
  /* .selectedMenu {
    border: 0.5px solid #333333;
    border-radius: 18px;
  } */
  background: #ed3237;
  li {
    padding: 6px;
    display: flex;
    align-self: space-between;

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
