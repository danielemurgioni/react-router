import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/about-us">About Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar