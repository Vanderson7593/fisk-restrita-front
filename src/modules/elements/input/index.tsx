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
    fontSize: "0.8rem",
    fontWeight: "300",
    backgroundColor: "inherit",
    width: "100%",
    color: "#4F4F4F",
  },
  compose(
    color,
    textAlign,
    boxShadow,
    space,
    position,
    variant({
      prop: "border",
      variants: { bottom: InputStyles.bottom },
    })
  )
);

export default Input;
