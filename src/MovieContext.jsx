import React, {createContext, useContext, useState} from 'react'

export const MovieContext= createContext()
const OurContext = ({children}) => {
    const [movie, setMovie]= useState([])
    const [searchKey, setsearchKey]= useState('')
    const [movieselected, setMovieSelected] =useState('')
    return (
    <MovieContext.Provider value ={{movie, setMovie, searchKey, setsearchKey, movieselected, setMovieSelected}}>
    {children}
    </MovieContext.Provider>
    )
}

export default OurContext