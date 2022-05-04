import styled from 'styled-components'

export const Board = styled.article`
    background: #fbe26b;
    width: 100%;
    padding: 30px;
    border: 2px solid #2a2b2b;
    box-sizing: border-box;

    h2 {
        text-align: center;
        font-size: 40px;
        margin: 0 0 20px;
        text-transform: uppercase;
    }
`

export const BoardFigure = styled.figure`
    text-align: center;

    img {
        width: 300px;
    }
`