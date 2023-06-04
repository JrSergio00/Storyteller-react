import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiSearchAlt2 } from "react-icons/bi"
import "./NavBar.css"

const NavBar = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate(`/search?q=${search}`)
        setSearch("")
    }


    return (
        <>
            <nav className="NavBar">
                <h2>
                    <Link to="/"> <img id="logo" src="./logo.png" /> </Link>
                </h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    required
                    />
                    <button type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form>
                <img id="user-image" src="./user.png" alt="User image" />

            </nav>
        </>
    )
}

export default NavBar