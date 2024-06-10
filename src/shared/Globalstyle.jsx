import { createGlobalStyle } from "styled-components"
import { reset } from "styled-reset"

const Globalstyle = createGlobalStyle`
  ${reset}
  
  * {
    font-family: 'Pretendard', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #a6c6cefb;
  }
`


export default Globalstyle