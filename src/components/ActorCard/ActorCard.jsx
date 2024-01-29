import { Link } from "react-router-dom"
export default function ActorCard({ actor }) {
    return (
        <div className="actor-card" >
            <Link to={`/actors/${actor}`}>
                <h3>{actor}</h3>
            </Link>
        </div>
    )
}