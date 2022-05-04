import styled from 'styled-components'

export const ProgressBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start
`

export const ProgressBarBar = styled.div`
    height: 20px;
    width: 100%;
    border: 2px solid #000;
    margin-bottom: 20px;
    background-color: #f5f5f5;
`

export const ProgressBarValue = styled.div`
    height: 20px;
    background-color: #82c6eb;
    border-right: 1px solid #000;
    text-align: right;
    padding-right: 10px;
    box-sizing: border-box;
`

export const ProgressBarLabel = styled.h3`
    flex: none;
    min-width: 30%;
    text-align: right;
    margin: 0 10px 20px 0;
    text-transform: capitalize;
`