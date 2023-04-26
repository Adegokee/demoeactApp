import React, {useContext,useEffect} from 'react'
import { MovieContext } from '../MovieContext'
import Item from './Item'
const url='https://api.themoviedb.org/3/'
const key='/movie?api_key=a48959be49dea9d323a3f6403522b738&query='

const List = () => {
    const {movie, setMovie, searchKey,setsearchKey, movieSelected, setMovieSelected}= useContext(MovieContext)
    useEffect(() =>{
        const adaApi=async ()=>{
            const type = searchKey? 'search': 'discover'
            const response=await fetch(`${url}${type}${key}${searchKey}`)
            const data =await response.json()
            setMovie(data.results)
            console.log(data.results)
        }
        adaApi()
    }, [movie, setMovie])
    return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', backgroundColor:'black'}}>
    {movie.map((x)=> (
        <Item x={x}/>
    ))}
    </div>
    )
}

export default List