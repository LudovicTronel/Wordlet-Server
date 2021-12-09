import React, { Component } from "react"

import './App.css';

import Accueil from './Accueil';
import Market from './Market';
import Collection from './Collection';
import Games from './Games';
import Credits from './Credits'
import Header from './Header';
import Providers from '../providers/Providers.comp';

import appendScript from './utils/appendScript';

class App extends Component{

    componentDidMount() {
        appendScript('./script.js')
    }

    render() {
        return (
            <Providers>
                <Header/>
                <Accueil/>
                <Market />
                <Collection />
                <Games />
                <Credits />
            </Providers>
        );
    }
}

export default App;