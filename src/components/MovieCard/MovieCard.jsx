
export default function MovieCard({movie}) {
    return(
        <div className="movieCard">
            <img src={movie.posterPath} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.releaseDate}</p>
        </div>

    )
}