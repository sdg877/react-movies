import ActorCard from "../../ActorCard/ActorCard.jsx";

export default function ActorsListPage({ movies }) {
    const actors = []
    movies.forEach((movie) => {
        actors.push(...movie.cast)
    })

    const actorSet = new Set(actors)
    const actorList = Array.from(actorSet)

    const showActorCard = () => {
        return actorList.map((actor) => (
            <ActorCard key={actor} actor={actor}/>
        ))
    }

    return(
        <div>
            <h1>Actor List Page</h1>
            <div>{showActorCard()}</div>
        </div>
    )
}