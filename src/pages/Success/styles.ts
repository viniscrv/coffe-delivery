import styled from "styled-components";


export const SuccessContainer = styled.div`
    margin-top: 4rem;

    header {
        margin-bottom: 2rem;
        h2 {
            font-family: "Baloo 2", sans-serif;
            font-size: 2rem;
            line-height: 1.6;
            color: ${props => props.theme["yellow-dark"]};
        }
        p {
            font-size: 1.25rem;
            color: ${props => props.theme["base-subtitle"]};
        }
    }
    main {
        display: grid;
        grid-template-columns: 1fr 2fr;
        .delivery-info {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            width: 32.875rem;
            padding: 2rem;
            border-radius: 6px 36px; 
            border-width: 2px;
            border-style: solid;
            border-color: ${props => props.theme["yellow"]};

            div {
                display: flex;
                align-items: center;
                /* span {
                    color: ${props => props.theme["white"]};
                    background-color: ${props => props.theme["purple"]};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 100%;
                    padding: .6rem;
                } */
                div {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin-left: .6rem;
                    p {
                        color: ${props => props.theme["base-subtitle"]};
                        strong {
                            font-weight: bold;
                            color: ${props => props.theme["base-subtitle"]};
    
                        }
                    }
                }
            }
        }
        .illustration {
            grid-column-end: end;
        }
    }
`

const COLORS = {
    yellowDark: "yellow-dark",
    yellow: "yellow",
    purple: "purple"
} as const

interface IconProps {
    color: keyof typeof COLORS;
}

export const IconsSuccess = styled.span<IconProps>`
    color: ${props => props.theme["white"]};
    background-color: ${props => props.theme[COLORS[props.color]]};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    padding: .6rem;
`