import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme.purple};
    }

    body {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
        margin: 0 14rem;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    input {
        padding: .6rem;
        background-color: ${props => props.theme["base-input"]};
        color: ${props => props.theme["base-label"]};
        border: 2px solid ${props => props.theme["base-hover"]};
        border-radius: 4px;
    }

`