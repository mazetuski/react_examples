import React from 'react'
import { Link } from "react-router-dom";
import './header.css'

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to="/">
                    <h1>Marketplace Example</h1>
                </Link>
            </header>
        )
    }
}

export default Header;
