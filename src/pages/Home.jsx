import { useState, useEffect } from "react"
import React from "react"
import MovieCard from "../components/MovieCard"
import "./Home.css"

const moviesUrl = import.meta.env.VITE_API
const apikey = import.meta.env.VITE_API_KEY

const Home = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    };

    useEffect(() => {
        const topRatedUrl = `${moviesUrl}top_rated?${apikey}`
    
        getTopRatedMovies(topRatedUrl)
    }, [])

    return(
        <div className="container">
            <h2 className="title">Filmes mais bem avaliados</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Loading...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>

        </div>
    )
}

export default Home

