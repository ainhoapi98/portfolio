import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "JetBrains Mono";
    }

    html,
    body {
        height: 100%;
        width: 100%;
    }

    body {
        margin: 0;
        text-rendering: geometricPrecision;
        -webkit-font-smoothing: antialiased;
    }

    table {
        border-collapse: collapse;
    }

    td {
        padding: 0;
    }
`
