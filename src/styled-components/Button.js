import styled, { css } from 'styled-components'

export const Button = styled.button`
    background: #ee6b2f;
    border: none;
    padding: 10px 12px;
    border-radius: 3px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: #c45522;
    }

    + button {
        margin-left: 10px
    }
`

export const ButtonGroup = styled.div`
    display: flex;

    ${props => props.centered && css`
        justify-content: center;
    `}
`