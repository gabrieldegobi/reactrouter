import { useState } from "react"
import { useNavigate } from "react-router-dom"




const SearchForm = () => {
    const navigate = useNavigate()
    const [query,setQuery]=useState()

    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate('/search?name_like='+ query)
    }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setQuery(e.target.value)} />
        <input type="submit" value='buscar' />
    </form>
  )
}

export default SearchForm