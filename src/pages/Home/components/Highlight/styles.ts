import styled from "styled-components";

export const HighlightContainer = styled.main`
    margin-top: 6rem;
    height: 32rem;
    display: flex;
    justify-content: space-between;
    .content {
        h1 {
            font-family: "Baloo 2";
            font-size: 3.2rem;
            line-height: 130%;
            color: ${props => props.theme["base-title"]};
        }
        p {
            margin-top: 1rem;
            font-size: 1.2rem;
            color: ${props => props.theme["base-subtitle"]};
        }
        .icons {
            margin-top: 3.4rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 2rem;
            max-width: 37.75rem;
            div {
                display: flex;
                gap: .4rem;
                color: ${props => props.theme["base-text"]};
                min-width: 17.375rem;
            }
        }
    }
`

const COLORS = {
    yellowDark: "yellow-dark",
    gray: "base-text",
    yellow: "yellow",
    purple: "purple"
} as const

interface IconProps {
    color: keyof typeof COLORS;
}

export const IconsHighlight = styled.span<IconProps>`
    color: ${props => props.theme["white"]};
    background-color: ${props => props.theme[COLORS[props.color]]};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    padding: .3rem;
`