import styled from "@emotion/styled";
import { theme } from "@theme";

export const List = styled("ul")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  /* gap: 23px; */
  border-top: 0.7px solid #bdbdbd;
  border-bottom: 0.7px solid #bdbdbd;
  height: 40px;

  li {
    display: flex;
    align-self: space-between;

    a {
      font-size: 0.875rem;
      font-weight: 300;
      color: #333;
      transition: 0.3s;
      padding-right: 32px;

      &:hover {
        cursor: pointer;
        color: #ed3237;
      }
    }
  }
`;
