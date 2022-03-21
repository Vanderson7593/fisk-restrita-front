import styled from "@emotion/styled";
import { Flex as FlexElement } from "modules/elements";

export const Flex = styled(FlexElement)`
  #container-background {
    width: 100vw;
    /* height: 100vh; */
    background-image: url("./background.jpg");
    background-size: cover;
  }
`;

export const Container = styled(Flex)`
  display: inline-block;
  width: 1360px;
  padding-top: 90px;
  text-align: center;
  h1 {
    font-size: 2rem;
    font-weight: 300;
    color: #ed3237;
    margin-right: 566px;
    margin-bottom: -10px;
  }

  .container-notice {
    display: flex;
    width: 800px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 100px;
    justify-content: center;
    gap: 40px;
    .box {
      width: 340px;
      text-align: center;
      border-radius: 20px;
      margin-bottom: 100px;
      background: #fff;
      box-shadow: 0px 0px 7px #828282;
      position: relative;
      .title-notice {
        font-size: 1.5rem;
        font-weight: 500;
        color: #333;
        margin-top: 25px;
        margin-bottom: 40px;
      }
      .title-notice::after {
        content: "";
        border-top: 1px solid #bdbdbd;
        width: 30%;
        position: absolute;
        top: 65px;
        left: 35.5%;
      }
      .img-notice {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .img-notice p {
        font-size: 1.1rem;
        font-weight: 300;
        color: #333;
        padding-left: 20px;
      }
      .button-notice {
        margin-top: 40px;
        margin-bottom: 30px;
        transition: all 0.2s;
      }

      .button-notice:hover {
        transform: scale(1.02);
      }

      .button-notice a {
        font-size: 1rem;
        color: #ed3237;
        font-weight: 300;
        padding: 5px 20px;
        border: 1px solid #ed3237;
        border-radius: 25px;
      }
    }
  }
`;

// .img-notice img {
//   height: 75px;
// }
