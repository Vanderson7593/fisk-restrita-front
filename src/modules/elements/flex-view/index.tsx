import styled from "@emotion/styled";

import { ViewProps } from "../elements.types";
import {
  boxShadow,
  borderRadius,
  color,
  compose,
  position,
  space,
  textAlign,
  variant,
} from "styled-system";

import StyledView from "../view";
import FlexViewStyles from "./flex-view-styles";

const Flex = styled(StyledView)<ViewProps>(
  {
    display: "flex",
  },
  compose(
    boxShadow,
    borderRadius,
    variant({
      prop: "boxShadow",
      variants: {
        true: {
          boxShadow: FlexViewStyles.boxShadow,
        },
        data: {
          boxShadow: FlexViewStyles.dataShadow,
        },
      },
    }),
    variant({
      prop: "borderRadius",
      variants: {
        rounded: FlexViewStyles.roundedBorders,
      },
    })
  )
);

export default Flex;
