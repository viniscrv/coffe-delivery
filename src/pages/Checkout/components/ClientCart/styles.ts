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
    display: flex;
    flex-direction: column;
    .CartProducts {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 1.2rem;

        img {
            width: 70px;
            height: auto;
        }
        div {
            display: flex;
            gap: .6rem;
            .product {
                color: ${props => props.theme["base-subtitle"]};
                display: flex;
                flex-direction: column;
                gap: .7rem;
                div {
                    .quantity-control {
                    background-color: ${props => props.theme["base-button"]};
                    color: ${props => props.theme["base-title"]};
                    width: 5.5rem;
                    display: flex;
                    justify-content: space-around;
                    flex-direction: row;
                    padding: .6rem;
                    border-radius: 8px;
                    gap: .6rem;
                        button {
                            background-color: ${props => props.theme["base-button"]};
                            color: ${props => props.theme["purple"]};
                            border: 0;
                            cursor: pointer;
                        }
                    }
                    .remove {
                        background-color: ${props => props.theme["base-button"]};
                        color: ${props => props.theme["base-text"]};
                        font-size: 0.75rem;
                        display: flex;
                        align-items: center;
                        gap: .2rem;
                        padding: .6rem ;
                        border: 0;
                        border-radius: 8px;
                        cursor: pointer;
                        span {
                            color: ${props => props.theme["purple"]};
                        }
                    }
                }
            }
        }
        span {
            font-weight: bold;
        }
    }
    .CartProducts + .CartProducts {
        margin: 1rem 0;
        padding-top: 1rem;
        border-top: 1px solid ${props => props.theme["base-button"]} ;
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

        .btn-confirm {
            text-align: center;
            text-decoration: none;
            font-weight: bold;
            padding: 1rem;
            margin-top: 1.25rem;
            border: 0;
            border-radius: 6px;
            background-color: ${props => props.theme["yellow"]};
            color: ${props => props.theme["white"]};
            cursor: pointer;
        }
    }

`