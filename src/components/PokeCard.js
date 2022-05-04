import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody } from '../styled-components/Card'

const PokeCard = ({ poke }) => {
    const {name, sprites, types, order, base_experience} = poke

    return (
        <Card type={types[0].type.name}>
            <Link to={`/poke/${poke.id}`}>
                <CardHeader>
                    <h1>{name}</h1>
                    <p>{order}</p>
                </CardHeader>
                <figure>
                    <img src={sprites.other.dream_world.front_default} alt={name}/>
                </figure>
                <CardBody>
                    <li><b>Type:</b> {types[0].type.name}</li>
                    <li><b>Experiencie:</b> {base_experience}</li>
                </CardBody>
            </Link>
        </Card>
    )
}

export default PokeCard