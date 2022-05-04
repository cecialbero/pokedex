import styled from 'styled-components'

const handleColorType = backgroundColor => {
  switch (backgroundColor) {
    case 'fire':
      return "#ef9f8e";
    case 'grass':
      return "#b2d8b7";
    case 'bug':
      return "#ac72ab";
    case 'water':
      return "#82c6eb";
    case 'normal':
      return '#c0c4c7'
    case 'poison':
      return '#f55a54'
    case 'ground':
      return '#c17e48'
    case 'fairy':
      return '#cceff4'
    case 'electric':
      return '#8dc6f4'
    case 'fighting':
      return '#f3b5f6'
    case 'ghost':
      return 'transparent'
    case 'rock':
      return '#c3a784'
    case 'psychic':
      return '#ffc275'
    default:
      return "#fff";
  }
};

export const CardGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const Card = styled.article`
  border-radius: 5px;
  border: 10px solid #fbe26b;
  margin: 20px;
  width: 200px;
  background: ${({ type }) => handleColorType(type)};
  box-shadow: 4px 3px 5px 0px rgba(135,132,132,0.75);

  a {
    color: #2a2b2b;
  }

  &:hover {
    box-shadow: 6px 6px 6px 0px grey;
    transform: translate(-2px, -2px);
    transition: transform 0.3s
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin: 0 10px;
    padding: 0 15px;
    height: 130px;
  }

  img {
      max-width: 100%;
      max-height: 110px;
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 15px 8px;

  h1 {
    text-transform: capitalize;
    margin: 0;
  }

  p {
    margin: 0;
    font-weight: bold;
  }
`

export const CardBody = styled.ul`
  margin: 0;
  padding: 10px 15px;

  li {
    list-style: none;
    font-size: 14px;
    padding: 5px 0
  }

  li:first-child {
    border-bottom:  1px solid #2a2b2b;
  }
`