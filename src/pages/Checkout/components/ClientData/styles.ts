import styled from "styled-components";

export const ClientDataContainer = styled.div`
    h2 {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.125rem;
        color: ${props => props.theme["base-subtitle"]};
        margin-bottom: 1em;
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
        }
        
    }

`