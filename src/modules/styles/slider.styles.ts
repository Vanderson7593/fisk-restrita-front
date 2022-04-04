import styled from "@emotion/styled";
import { Flex as FlexElement } from "modules/elements";

export const Flex = styled(FlexElement)`
  display: block;
  background: #c4c4c4;
  width: 760px;
  height: 280px;
  /* margin: 10px auto 80px auto; */
  margin: 0px auto 0px auto;
  /* padding-top: 40px; */
  /* overflow: hidden; */

  div {
    margin-top: 46.5px;
    display: flex;
    width: 100%;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    color: #4f4f4f;
    margin-top: -4px;
  }

  .slick-next:before {
    color: #c4c4c4;
  }
  .slick-prev:before {
    color: #c4c4c4;
  }

  .slick-slider {
    margin-top: 20px;
  }
`;
