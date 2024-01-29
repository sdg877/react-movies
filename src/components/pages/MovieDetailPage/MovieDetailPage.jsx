import { useParams } from 'react-router-dom'


export default function MovieDetailPage({movies}) {
    const { movieName } = useParams();
    const selectedMovie = movies.find(movie => movie.title === movieName);
  console.log(movies)
    return(
        <div>
        <h1>Movie Detail Page</h1>
        <h2>{selectedMovie.title}</h2>
        <p>{selectedMovie.releaseDate}</p>
        <img src={selectedMovie.posterPath} alt={selectedMovie.name} />
        <p>Cast: {selectedMovie.cast.join(', ')}</p>
        </div>
    )
}
