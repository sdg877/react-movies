
import MovieCard from '../../MovieCard/MovieCard.jsx'
import { Link } from 'react-router-dom'


export default function MoviesListPage({movies}) {

    function handleClick(e) {
        console.log(e.target)
    }
    return(
        <div className='moviesListPage'>
        <h1>Movie List Page</h1>
        <div>
        {movies.map((movie) => {
            return(
            <Link onClick={handleClick} to={`/movies/${movie.title}`} key={movie.id} >
                <MovieCard movie={movie} />
             </Link>
            )})}
                
            </div>
        </div>
    )
}