import React from 'react'
const imgpath = 'https://image.tmdb.org/t/p/w500'
const unavailable ='https://us.123rf.com/450wm/bankrx/bankrx1805/bankrx180500212/101281804-grunge-red-unavailable-word-with-star-icon-round-rubber-stamp-on-white-background.jpg?ver=6'
const Item = ({x}) => {
    return (
    <div style={{width:'200px',display:'flex',flexDirection:'column', justifyContent:'center'}}>
    <img width='200' src={x.poster_path ? `${imgpath}${x.backdrop_path}`:unavailable} alt="" />
    <div>
    <p style={{color:'white', textAlign:'center'}}>{x.title}</p>
    <main style={{display:'flex', justifyContent:'space-between', padding:'10px', alignItems:'center' }}>
    <span >{x.release_date}</span>
    <span style={{ backgroundColor:'green', padding:'10px', borderRadius:'50%'}}>{x.vote_average.toFixed(0)}</span>
    </main>
    </div>
    </div>
    )
}

export default Item