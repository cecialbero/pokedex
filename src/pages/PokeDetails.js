import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Board, BoardFigure } from '../styled-components/Board'
import { Button } from '../styled-components/Button'
import { Container, Row, Column } from '../styled-components/Grid'
import Loader from '../components/Loader'
import Alert from '../components/Alert'
import Chart from '../components/Chart'

const PokeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [poke, setPoke] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const getPoke = async id => {
    try {
      setLoading(true)
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      let data = await res.json()

      setPoke(data)
    } catch(err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPoke(id)
  }, [id])

  const handleReturn = () => {
      navigate( -1 );
  }

  if(error) {
    return <Alert />
  }

  const { name, sprites, stats } = poke

  return (
    <Container mxWidth={'1000px'}>
      {
        loading
        ? <Loader />
        : <>
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
          </>
      }
    </Container>
  )
}

export default PokeDetails