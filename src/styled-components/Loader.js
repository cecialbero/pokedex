import styled from 'styled-components'

export const Loader = styled.div`
    background: url(../../public/img/pokeball.gif);
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`