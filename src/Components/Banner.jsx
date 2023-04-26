import React, {useContext} from 'react'

import { MovieContext } from '../MovieContext'
const imgpath = 'https://image.tmdb.org/t/p/w500'
const Banner = () => {
    const {setMovieSelected, movieselected}=useContext(MovieContext)
  return (
    <div>
         
    <div style={{backgroundImage: `url(${imgpath}${movieselected.backdrop_path
})`, width:'100%', height:'70vh', backgroundRepeat:'no-repeat', backgroundSize:'cover', marginBottom:'10px'}}>
        <div>
            <h1 style={{color:'white', textAlign:'center'}}>{movieselected.title}</h1>
            <p style={{color:'white', textAlign:'center'}}>{movieselected.overview}</p>
        </div>

    </div>
    </div>
  )
}

export default Banner
