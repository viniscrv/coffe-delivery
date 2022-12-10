import styled from "styled-components";

export const CheckoutContainer = styled.div`
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-content: center;
    }
`

export const ClientDataContainer = styled.div`
    h2 {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.125rem;
        color: ${props => props.theme["base-subtitle"]};
        margin-bottom: 1em;
    }

    @media (max-width: 768px) {
        width: 90vw;
    }
`

export const AddressField = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 2rem;
    border-radius: 6px;
    margin-bottom: 1rem;
    header {
        display: flex;
        gap: .5rem;
        margin-bottom: 1rem;
        span {
            color: ${props => props.theme["yellow-dark"]};
        }
        div {
            display: flex;
            flex-direction: column;
            p {
                color: ${props => props.theme["base-subtitle"]};
            }
            span {
                font-size: 0.875rem;
                color: ${props => props.theme["base-text"]};
                line-height: 1.8;
            }
        }
    }

    form {
        .address {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .cep {
                width: 12.5rem;
            }
        }
        .complements {
            margin: 1rem 0;
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 1rem;
            flex-wrap: wrap;
        }
        .add {
            display: grid;
            grid-template-columns: 1fr 1fr 10%;
            gap: 1rem;
        }
    }

    @media (max-width: 768px) {
        form {
            display: flex;
            flex-direction: column;
            input {
                width: 100%;
            }
            .address {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .cep {
                width: 100%;
            }
            }
            .complements {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
            }
            .add {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 1rem;
            }
        }
    }
`

export const PaymentField = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 2rem;
    border-radius: 6px;

    header {
        display: flex;
        gap: .5rem;
        margin-bottom: 1rem;
        span {
            color: ${props => props.theme["purple"]};
        }
        div {
            display: flex;
            flex-direction: column;
            p {
                color: ${props => props.theme["base-subtitle"]};
            }
            span {
                font-size: 0.875rem;
                color: ${props => props.theme["base-text"]};
                line-height: 1.8;
            }
        }
    }
    .optionsPayment {
        -webkit-user-select:none;  
        -moz-user-select:none;     
        -ms-user-select:none;      
        user-select:none;  
        display: flex;
        gap: 0.75rem;
        input[type="radio"] {
            display: none;
            &:checked + label {
            background-color: ${props => props.theme["purple-light"]};
            border: 2px solid ${props => props.theme["purple"]};
        }
        }
        label {
            color: ${props => props.theme["base-subtitle"]};
            background-color: ${props => props.theme["base-button"]};
            font-size: 0.75rem;
            border: 2px solid transparent;
            padding: 0.875rem;
            border-radius: 4px;
            display: flex;
            align-items: center;
            width: 11.25rem;
            gap: 0.75rem;
            cursor: pointer;

            span {
                color: ${props => props.theme["purple"]};
                
            }

            &:hover {
                background-color: ${props => props.theme["base-hover"]};
            }
        }
    }

    @media (max-width: 768px) {
        .optionsPayment {
            flex-direction: column;
            align-items: center;
            label {
                width: 100%;
            }
        }
    }
`

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
    .cart-empty {
        h3 {
            margin-bottom: .5rem;
        }
        p {
            font-size: .95rem;
            color: ${props => props.theme["base-label"]};
        }
    }
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
                        &:hover {
                            background-color: ${props => props.theme["base-hover"]};
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
            margin-bottom: 1.25rem;
        }

        .btn-confirm {
            width: 100%;
            font-weight: bold;
            padding: 1rem;
            border: 0;
            border-radius: 6px;
            background-color: ${props => props.theme["yellow"]};
            color: ${props => props.theme["white"]};
            cursor: pointer;

            &:disabled {
                opacity: 0.7;
                cursor: not-allowed;
            }

            &:focus {
                box-shadow: 0 0 0 2px ${props => props.theme["yellow"]};
            }
        }
    }

    @media (max-width: 768px){
        .CartProducts {
            div {
                img {
                    object-fit: contain;
                }
                .product {
                    div {
                        flex-direction: column;
                        .quantity-control {
                            min-width: 100%;
                        }
                    }
                }
            }
        }
    }
`