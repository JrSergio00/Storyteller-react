import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import "./MovieDetail.css"

const imageUrl = import.meta.env.VITE_IMG

const MovieDetail = ({ movie }) => {
    return (
        <main>
            {movie &&
                <div className="detailMovie">
                    <div className="imageAndTitle">
                        <img src={imageUrl + movie.poster_path} alt={movie.title} />
                        <h3>{movie.title}</h3>
                    </div>
                    <p className="overview">{movie.overview}</p>
                    <p> <FaStar /> {movie.vote_average} </p>
                </div>
            }
        </main>
    )
}

export default MovieDetail