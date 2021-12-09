import React from 'react'
import * as fcl from "@onflow/fcl"

import { useAuth } from '../providers/AuthProvider';

const Accueil = () => {
    const { user, loggedIn, logOut } = useAuth()
    return(
        <section id="accueil">
            {loggedIn?
                <div>
                    <span>{user?.addr ?? "Pas d'Adresse"}</span>
                    <button className="btn-secondary" onClick={ () => logOut() }>Déconnexion</button>
                </div>
            :
                <button onClick={fcl.authenticate}>Connexion</button>
            }
            <img src = "etoiles.png" id = "stars" alt = "étoiles de fond" />
            <img src = "nuages.png"  id = "nuages" alt = "nuages" />

            <img src="lune.png" class = "motion-object" style={{mixBlendMode:"screen"}} alt="lune de fond"/>
            <img src="montagne_derriere.png" style={{marginTop:"500px"}} id="mountains_behind" alt="montagnes de fond"/>

        </section>
    )
}

export default Accueil