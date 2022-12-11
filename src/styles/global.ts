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
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    input {
        padding: .6rem;
        color: ${props => props.theme["base-label"]};
        background-color: ${props => props.theme["base-input"]};
        border: 2px solid ${props => props.theme["base-hover"]};
        border-radius: 4px;

        &:focus {
            box-shadow: none; 
            border: 2px solid ${props => props.theme["yellow"]};;
        }
    }

    @media (max-width: 768px) {
        body {
            padding: 0 2rem;
        }

        body, input, textarea, button {
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: .9rem;
        }
    }
`