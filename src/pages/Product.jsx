import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { Link } from 'react-router-dom'


const Product = () => {
    //rota dinamica, useParams pega o parametro da url
    const { id } = useParams()
    const url = 'http://localhost:3000/products/' + id
    const { data: product, loading, erro } = useFetch(url)
    console.log(product)
    return (
        <>
            {erro && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R$ {product.price}</p>
                    <Link to={`/products/${product.id}/info`}>Mais Informações</Link>
                </div>
            )}

        </>
    )
}

export default Product