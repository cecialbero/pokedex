import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Chart from '../components/Chart'
import Loader from '../components/Loader'
import { Board, BoardFigure } from '../styled-components/Board'
import { Button } from '../styled-components/Button'
import { Container, Row, Column } from '../styled-components/Grid'
import { Alert } from '../styled-components/Alert'

const PokeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [poke, setPoke] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const getPoke = async id => {
    try {
      setIsLoading(true)
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      let data = await res.json()
      setPoke(data)
    } catch(err) {
      setIsError(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPoke(id)
  }, [id])

  if(isLoading) {
    return <Loader />
  }

  if(isError) {
    return <Alert type={'error'}>Ups, looks like we couldn't catch any Pokemon. Try later</Alert>
  }

  const { name, stats, sprites } = poke

  const handleReturn = () => {
      navigate( -1 );
  }

  return (
    <Container mxWidth={'1000px'}>
      <Board>
        <Row>
          <Column size={1}>
            <h2>{name}</h2>
          </Column>
        </Row>
        <Row centered>
          <Column size={1}>
            <BoardFigure>
              <img src={sprites.other.dream_world.front_default} alt={name}/>
            </BoardFigure>
          </Column>
          <Column size={1}>
            {stats.map(el => <Chart key={el.stat.name} value={el.base_stat} label={el.stat.name.replace(/-/, ' ')} />)}
          </Column>
        </Row>
      </Board>
      <Button className='mt-30' onClick={ handleReturn }>
        Back to Dek 
      </Button>
    </Container>
  )
}

export default PokeDetails