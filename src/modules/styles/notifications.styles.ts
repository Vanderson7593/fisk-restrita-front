import styled from "@emotion/styled";
import { Flex } from "modules/elements";

export const Container = styled(Flex)`
background-color: #FFF;
width:300px;
min-height:300px;
border-radius:20px;
display:flex;
border: 1px solid #ED3237;

div{
  display:flex;
  border-bottom: 1px solid #C4C4C4;
  flex:1;
  max-height:40px;
  
  p{
    padding:10px;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 21px;
    letter-spacing: 0em;
    // color:#000;
  }
}

`
