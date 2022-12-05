import styled from "styled-components";

export const ClientDataContainer = styled.div`
    h2 {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.125rem;
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const AddressField = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 2rem;
    border-radius: 6px;
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
`

export const PaymentField = styled.div`
    background-color: ${props => props.theme["base-card"]};

`