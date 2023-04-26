import './App.css';
import  OurContext  from './MovieContext';
import List from './Components/List';

// const key ='/movie?api_key=a48959be49dea9d323a3f6403522b738&query='
const imgpath = 'https://image.tmdb.org/t/p/w500'
// const url = 'https://api.themoviedb.org/3/discover/movie?api_key=a48959be49dea9d323a3f6403522b738&query=terminator'
function App() {
  return (
    <OurContext>
    <List/>
    </OurContext>
  );
}

export default App;
