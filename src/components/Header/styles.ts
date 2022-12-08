import styled from "styled-components";

export const HeaderContainer = styled.header`
margin-top: 2rem;
display: flex;
justify-content: space-between;

img {
    max-height: 40px;
    cursor: pointer;
}

div {
    display: flex;
    gap: 1rem;
    
    .local {
        background-color: ${props => props.theme["purple-light"]};
        color: ${props => props.theme["purple-dark"]};
        padding: .4rem 1.2rem;
        border: 0;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-around;

        span {
            color: ${props => props.theme["purple"]};
            padding-top: .1rem;
        }
    }
    .market {
        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
        padding: .4rem .6rem;
        border: 0;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;

        .badge {
            background-color: ${props => props.theme["yellow-dark"]};
            color: ${props => props.theme["white"]};
            padding: .1rem .4rem;
            border-radius: 50%;
            position: absolute;
            top: -.5rem;
            right: -.5rem;
            font-size: .9rem;
        }
    }
}
`