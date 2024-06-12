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
    min-height: 100vh;
    max-width: 1200px;
    min-width: 780px;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: black;
  }
`

export default Globalstyle