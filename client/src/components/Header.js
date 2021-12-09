import { useState } from "react"
import React, { Component } from "react"

import {Link} from 'react-router-dom';

const buttons = {
    "": "Accueil", 
    "forge": "Forge",
    "advanced": "Admin",
    "about": "About",
}

class Navigation extends Component {

    render(){
        return (
            <nav>
                <div class = "burger">
                    <div class = "line1"></div>
                    <div class = "line2"></div>
                    <div class = "line3"></div>
                </div>

                <ul class = "nav-links">
                {Object.entries(buttons).map(button => {
                    return (
                        <li><Link to={"/"+button[0]}>{button[1]}</Link></li>
                    )
                })}
                </ul>
                
                <h1 id="wordlet-title"><Link to = "/">Wordlet</Link></h1>


                <div class = "toggle">
                    <i class = "toggleButton"></i>
                </div>
            </nav>
        )
    }
}

export default Navigation;