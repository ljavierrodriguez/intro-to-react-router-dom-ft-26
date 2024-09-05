import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SubMenu = () => {

    const location = useLocation()

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className={"nav-link " + (location.pathname === '/about/mission' || location.pathname === '/about' ? "active" : "")} to="/about/mission">Mission</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (location.pathname === '/about/vision' ? "active" : "")} to="/about/vision">Vision</Link>
            </li>
        </ul>
    )
}

export default SubMenu