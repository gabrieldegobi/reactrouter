import { useParams } from "react-router-dom"

const Info = () => {
const{id} = useParams()

  return (
    <div>este é o id do meu parametro {id}</div>
  )
}

export default Info