import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import styles from './Home.module.css'


const Home = () => {
  const url = 'http://localhost:3000/products'

  const { data: items, loading, error } = useFetch(url)
  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className={styles.products}>
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

export default Home