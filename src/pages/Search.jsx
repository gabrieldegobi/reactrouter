import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"



const Search = () => {
    const [searchParams] = useSearchParams()
    const url = 'http://localhost:3000/products?' + searchParams
    console.log(url)
    const { data: items, loading, error } = useFetch(url)
console.log(items)
    return (
        <div><h1>Resultados disponiveis</h1>
            <ul>
                {items
                    && items.map((item) => (
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <p>R$ {item.price}</p>
                            <Link to={`/products/${item.id}`}>Detalhes</Link>
                        </li>
                    ))}
            </ul>

        </div>
    )
}

export default Search