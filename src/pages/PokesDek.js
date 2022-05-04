import { useEffect, useState } from 'react'
import Alert from '../components/Alert'
import Loader from '../components/Loader'
import PokeCard from '../components/PokeCard'
import { CardGroup } from '../styled-components/Card'
import { Button, ButtonGroup } from '../styled-components/Button'

const PokesDek = () => {
    const [pokes, setPokes] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [next, setNext] = useState()
    const [previous, setPrevious] = useState()

    useEffect(() => {
        getPokes()
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
        return <Alert />
    }

    return (
        <>
            {
                loading
                ?   <Loader />
                :   <CardGroup>
                        {pokes.map((poke, index) => <PokeCard key={index} poke={poke} />)}
                    </CardGroup>
            }
            <ButtonGroup centered>
                <Button onClick={() => goToPage(previous)} disabled={!previous}>Previous</Button>
                <Button onClick={() => goToPage(next)} disabled={!next}>Next</Button>
            </ButtonGroup>
        </>
    )
}

export default PokesDek
