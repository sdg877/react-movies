import { useParams } from 'react-router-dom'
import MovieCard from '../../MovieCard/MovieCard.jsx'

export default function ActorDetailPage({ movies }) {
    const { actorName } = useParams()

    const actorMovies = movies.filter((movie) =>
        movie.cast.includes(actorName))

        const list = actorMovies.map((movie, idx) => (
            <MovieCard movie={movie} key={idx} />
        ))
    return(
        <div className='actorsListPage'>
        <h1>{actorName}</h1>
        <h3>Movies:</h3>
        <div>{list}</div>
        

        </div>
    )
}