import {createGlobalStyle} from 'styled-components'
import {Colors} from "assets/colors";


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body, #app {
        font-family: "JetBrains Mono", monospace;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: ${Colors.background.default};
        color: ${Colors.text.primary};
    }

`

export default GlobalStyle
