import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            {/*logo*/}
            <div className="navbar__logo">
                <h1>Mern shopping Cart</h1>
            </div>
            {/*links*/}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart">


                    </Link>

                </li>
            </ul>
        </nav>
    )
}

export default Navbar