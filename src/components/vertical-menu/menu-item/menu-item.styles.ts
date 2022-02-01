import styled from "@emotion/styled";
import { Flex } from "modules/elements";

export const Item = styled(Flex)`

align-items:center;
justify-content:space-between;
cursor:pointer;
min-height: 46px;

border-bottom: 0.5px solid #F0F0F0;

p{
 color: #ED3237;
 font-weight: 300px;
 font-size: 16px;
 line-height: 24px;
 padding-left:20px;
}

svg{
 margin-right:20px;
}
`