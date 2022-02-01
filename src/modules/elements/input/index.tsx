import styled from "@emotion/styled";
import { theme } from "@theme";
import {
  boxShadow,
  color,
  compose,
  position,
  space,
  textAlign,
  variant,
} from "styled-system";
import InputStyles from "./input-styles";

import { InputProps } from "./input.types";

const Input = styled("input")<InputProps>(
  {
    border: "none",
    fontSize: "13pt",
    fontWeight: "lighter",
    backgroundColor: "inherit",
    width: "100%",
  },
  compose(
    color,
    textAlign,
    boxShadow,
    space,
    position,
    variant({
      prop: "border",
      variants: {
        bottom: InputStyles.bottom,
      },
    })
  )
);

export default Input;
