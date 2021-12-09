import React from "react";

import { Link } from 'react-router-dom';

const Games = () => {
    return(

        <section>
            <div className="card">
                <Link to = "decoy"><button>Decoy 6</button></Link>
            </div>
            <img src = "lava1.jpg" id = "mountains_front" alt = ""/>
        </section>
    )
}

export default Games 