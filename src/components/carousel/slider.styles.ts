import styled from "@emotion/styled";
import { Flex as FlexElement } from "modules/elements";

export const Flex = styled(FlexElement)`
  display: block;
  background: #c4c4c4;
  width: 760px;
  height: 280px;
  margin: 15px auto 80px auto;
  padding-top: 40px;

  div {
    margin-top: 36px;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    color: #4f4f4f;
  }
  .slick-prev {
    left: 17px;
    top: 64px;
  }
  .slick-next {
    right: 17px;
    top: 64px;
  }
`;
