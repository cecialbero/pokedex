import styled from 'styled-components'

const handleBackgroundColor = type => {
    switch(type) {
        case 'info':
            return '#e9d8fd'
        case 'error':
            return '#fed7d7'
        default:
            return '#edf2f7'
    }
}

const handleColor = type => {
    switch(type) {
        case 'info':
            return '#44337a'
        case 'error':
            return '#822727'
        default:
            return '#1a202c'
    }
}

export const AlertMsg = styled.dialog`
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    padding: 20px;
    margin: 0;
    min-width: 200px;
    font-weight: bold;
    background: ${({type}) => handleBackgroundColor(type)};
    color: ${({type}) => handleColor(type)};
`