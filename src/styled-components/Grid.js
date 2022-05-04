import styled, { css } from 'styled-components'

export const Container = styled.section`
    max-width: 1200px;
    width: 100%;
    margin: 30px auto;
    padding: 10px;
    box-sizing: border-box;
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${props => props.centered && css`
        justify-content: center;
        align-items: center;
    `}
`

export const Column = styled.div`
    flex: ${(props) => props.size};
`