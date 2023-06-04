import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import "./MovieCard.css"

const imageUrl = import.meta.env.VITE_IMG


const MovieCard = ({ movie, showLink = true }) => {
    return (
        <>
            {showLink && <Link to={`/movie/${movie.id}`} id="cards">
                <div className="moviecard">
                    <img src={imageUrl + movie.poster_path} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    <p>
                        <FaStar /> {movie.vote_average}
                    </p>
                </div>
            </Link>}
        </>
    )
}

export default MovieCard