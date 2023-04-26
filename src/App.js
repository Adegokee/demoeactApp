import React, {useState} from 'react';
import './App.css';
import  OurContext  from './MovieContext';
import List from './Components/List';
import Form from './Components/Form';
import Banner from './Components/Banner';

// const key ='/movie?api_key=a48959be49dea9d323a3f6403522b738&query='
const imgpath = 'https://image.tmdb.org/t/p/w500'
// const url = 'https://api.themoviedb.org/3/discover/movie?api_key=a48959be49dea9d323a3f6403522b738&query=terminator'
function App() {
  const [dark, setDark] =useState('dark')
  return (
  <div className={dark}>
      <OurContext>
        <button onClick={() => setDark( dark === "dark" ? 'light': 'dark')}>{dark}</button>
      <Form />
      <Banner />
    <List/>
    </OurContext>
  </div>
  );
}

export default App;
