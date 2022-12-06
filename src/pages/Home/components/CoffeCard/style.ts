import styled from "styled-components";

export const CoffeCardContainer = styled.div`

    background-color: ${props => props.theme["base-card"]};
    width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6% 18%;
    gap: .8rem;
    padding: 1rem 0;
    margin-bottom: 2rem;

    img {
        width: min-content;
        margin-top: -30px;
    }
    div {
        display: flex;
        flex-wrap: wrap;
        gap: .4rem;
        .tag {
        font-size: .7rem;
        font-weight: bold;
        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
        padding: .6rem;
        border-radius: 8px;
        }
    }
    strong {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 1.6;
        color: ${props => props.theme["base-subtitle"]};
    }
    p {
        font-size: .9rem;
        text-align: center;
        color: ${props => props.theme["base-label"]};
    }

    footer {
        display: flex;
        width: 80%;
        justify-content: space-around;
        align-items: center;

        .price {
            font-family: "Baloo 2", sans-serif;
            font-size: 1.4rem;
            font-weight: bold;

            &::before {
                content: "R$";
                font-size: 1rem;
                margin-right: 2px;
            }
        }

        .quantity-control {
            background-color: ${props => props.theme["base-button"]};
            color: ${props => props.theme["base-title"]};
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

        .btn-cart {
            background-color: ${props => props.theme["purple-dark"]};
            color: ${props => props.theme["white"]};
            padding: .4rem;
            border: 0;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
`