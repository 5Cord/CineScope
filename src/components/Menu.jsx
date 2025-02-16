import React from 'react'
import { Link } from 'react-router'

export default function Menu() {
    return (
        <ul>
            <li>
                <Link to="/">Каталог</Link>
            </li>
            <li>
                <Link to="/fav">Избранное</Link>
            </li>
            <li>
                <Link to="/trash">Моё</Link>
            </li>
        </ul>
    )
}
