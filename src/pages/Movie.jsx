import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./Movie.css"
import React from "react"
import MovieDetail from "../components/MovieDetail"

const moviesUrl = import.meta.env.VITE_API
const apikey = import.meta.env.VITE_API_KEY

const Movie = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async(url) => {
        const res = await fetch(url)
        const data = await res.json()

        console.log(data)
        setMovie(data)
    }

    useEffect(() =>{
        const movieUrl = `${ moviesUrl }${ id }?${ apikey }`
        getMovie(movieUrl)
    }, [])

    return(
        <div>
            { movie && <>
                <MovieDetail movie={movie} />
            </> }
        </div>
    )
}

export default Movie