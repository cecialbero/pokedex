import { AlertMsg } from '../styled-components/AlertMsg'

const Alert = ({msg, type}) => {
  return (
    <AlertMsg type={type}>{msg}</AlertMsg>
  )
}

export default Alert