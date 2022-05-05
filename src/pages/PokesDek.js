import { useEffect, useState } from 'react'
import PokeCard from '../components/PokeCard'
import Loader from '../components/Loader'
import { CardGroup } from '../styled-components/Card'
import { Button, ButtonGroup } from '../styled-components/Button'
import { Container } from '../styled-components/Grid'
import { Alert } from '../styled-components/Alert'

const PokesDek = () => {
    const [pokes, setPokes] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [next, setNext] = useState()
    const [previous, setPrevious] = useState()

    useEffect(() => {
        setTimeout(getPokes, 1000)
    }, [])

    const getPokes = async (pagination = 'https://pokeapi.co/api/v2/pokemon?limit=12') => {
        try {
            setPokes([])
            setLoading(true)
            const res = await fetch(pagination)
            const data = await res.json()

            setNext(data.next)
            setPrevious(data.previous)

            data.results.forEach(async poke => {
                const res = await fetch(poke.url)
                const data = await res.json()

                setPokes(pokes => [...pokes, data])
            })
        } catch(err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const goToPage = page => {
        getPokes(page)
    }

    if(error) {
        return <Alert type={'error'}>Ups, looks like we couldn't catch any Pokemon. Try later</Alert>
    }

    return (
        <Container mxWidth={'1100px'}>
            {
                loading
                ?   <Loader msg='Catching Pokemons...'/>
                :   <CardGroup>
                        {pokes.map((poke, index) => <PokeCard key={index} poke={poke} />)}
                    </CardGroup>
            }
            <ButtonGroup centered className='mt-30'>
                <Button onClick={() => goToPage(previous)} disabled={!previous}>Previous</Button>
                <Button onClick={() => goToPage(next)} disabled={!next}>Next</Button>
            </ButtonGroup>
        </Container>
    )
}

export default PokesDek
