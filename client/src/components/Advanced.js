import React, { Component } from "react"
import Header from "./Header";
import Providers from "../providers/Providers.comp";

import appendScript from './utils/appendScript';

class Advanced extends Component {

    componentDidMount() {
        appendScript('./script.js')
    }

    render(){
        return(
            <Providers>
                <Header/>
                <section>
                    <h1>Espace en construction...</h1>
                    
                    <img src="marche.png" id="marche" alt=""/>
                </section>
            </Providers>
        )
    }
}

export default Advanced;