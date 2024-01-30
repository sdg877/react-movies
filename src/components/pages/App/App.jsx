import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css';
import LoginPage from '../LoginPage/LoginPage.jsx';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage.jsx';
import MovieListPage from '../MoviesListPage/MoviesListPage.jsx';
import NavBar from '../../NavBar/NavBar.jsx';
import ActorListPage from '../ActorListPage/ActorListpage.jsx';
import ActorDetailPage from '../ActorDetailPage/ActorDetailPage.jsx';
import { movies } from '../../../data.js'

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user}/>
          <Routes>
            <Route path='/' element={ < MovieListPage movies={movies}/> }/>
            <Route path='/movies/:movieName' element={ <MovieDetailPage movies={movies} /> }/>
            <Route path='/actors' element={ <ActorListPage movies={movies}/> }/>
            <Route path='/actors/:actorName' element={ <ActorDetailPage movies={movies}/>} />
          </Routes>
        </>
        :
        <LoginPage setUser={setUser}/>
      }
    </main>
  );
}