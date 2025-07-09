import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Product = () => {
    //rota dinamica, useParams pega o parametro da url
    const { id } = useParams()

    return (
        <div><p>Id do produto {id}</p></div>
    )
}

export default Product