import styled from "@emotion/styled";

export const List = styled('ul')`

display:flex;
justify-content:space-between;
flex:1;
gap:10px;
margin-top:25px;

.selectedMenu{
  border: 0.5px solid #333333;
  border-radius:18px;
}

li{
  padding:6px;
  display:flex;
  align-self:space-between;

  a{
    font-size:14px;
    font-weight:300;
    color:#333333;
    text-transform: uppercase;

    &:hover{
      cursor:pointer;
    }
  }
}
`