import styled from "styled-components";

export const CoffeesListContainer = styled.div`
    h2 {
        margin-bottom: 2rem;
        font-size: 2rem;
        font-family: "Baloo 2", sans-serif;
        color: ${props => props.theme["base-subtitle"]};
    }

    div {
        display: flex;
        justify-content: stretch;
        flex-wrap: wrap;
        gap: 2em;
    }

    @media (max-width: 768px) {
        div {
            justify-content: center;
        }
    }
`

