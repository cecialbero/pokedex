
const Loader = ({msg = ''}) => {
  return (
    <div className='loader'>
        <img src='/img/pokeball.gif' alt='a moving pokeball' width='80'/>
        <p>{msg}</p>
    </div>
  )
}

export default Loader