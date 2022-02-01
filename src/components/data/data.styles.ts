import styled from "@emotion/styled";
import { Flex as FlexElement } from "modules/elements";

export const Flex = styled(FlexElement)`

.description {
  color:#333333;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0em;
}

`

export const Title = styled('p')`
font-size: 32px;
font-style: normal;
font-weight: 300;
line-height: 48px;
letter-spacing: 0em;
color:#ED3237;
`

export const DataItem = styled(FlexElement)`
display: flex;
justify-content: center;
align-items: center;
background-color: #E0E0E0;
padding: 12px 25px;
margin: 0 10px;
gap:10px;

p{
font-size: 12px;
font-style: normal;
font-weight: 300;
line-height: 18px;
letter-spacing: 0em;
text-align: left;

}
`