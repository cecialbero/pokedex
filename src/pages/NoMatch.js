import { Container } from '../styled-components/Grid'
import { Board } from '../styled-components/Board'
import { Button } from '../styled-components/Button'
import { useNavigate } from 'react-router-dom'

const NoMatch = () => {
  const navigate = useNavigate()

  const goToDek = () => {
    navigate('/')
  }

  return (
    <Container mxWidth={'1000px'} className='no-match'>
      <Board>
        <img src='/img/pokeball.gif' alt='moving pokeball' width='150'/>
        <h2>No Pokemons over here</h2>
        <p>To find one, go <Button onClick={ goToDek }>back to the dek</Button></p>
      </Board>
    </Container>
  )
}

export default NoMatch