import React from 'react';
import MovieList from './components/MovieList'
import './styles.css'





function App() {
  return (
    <div className='App'>
    <div className= 'logo_container'>
  
    <h1>Studio Ghibli API</h1>
    <MovieList/>
    </div>
    </div>
    
  );
}

export default App;
