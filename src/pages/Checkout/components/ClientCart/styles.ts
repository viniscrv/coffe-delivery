import styled from "styled-components";



export const ClientCartContainer = styled.div`
    h2 {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.125rem;
        color: ${props => props.theme["base-subtitle"]};
        margin-bottom: 1em;
    }
`

export const CartContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 2rem 4rem;
    border-radius: 6px 44px;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    .CartProducts {
        display: flex;
        justify-content: space-between;
        gap: 1.2rem;
      
        div {
            display: flex;
            flex-direction: column;
            gap: .5rem;
            color: ${props => props.theme["base-subtitle"]};
            .quantity-control {
                background-color: ${props => props.theme["base-button"]};
                color: ${props => props.theme["base-title"]};
                width: 4.5rem;
                display: flex;
                flex-direction: row;
                padding: .4rem;
                border-radius: 8px;
                gap: .6rem;
                button {
                    background-color: ${props => props.theme["base-button"]};
                    color: ${props => props.theme["purple"]};
                    border: 0;
                    cursor: pointer;
                }
            }
        }
        span {
            font-weight: bold;
        }
    }

    .confirmOrder {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: .9rem;

        div {
            color: ${props => props.theme["base-text"]};
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .totalPrice {
            font-size: 1.25rem;
            font-weight: bold;
            color: ${props => props.theme["base-subtitle"]};
        }

        button {
            padding: 1rem;
            border-radius: 6px;
            border: 0;
            background-color: ${props => props.theme["yellow"]};
            color: ${props => props.theme["white"]};
            font-weight: bold;
            cursor: pointer;
        }
    }

`