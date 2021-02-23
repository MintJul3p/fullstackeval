import logo from './logo.svg';
import './App.css';
import {Header} from "./Component/Header";
import {Main} from './Component/Main'
import React from "react";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <React.StrictMode>
                <Header/>
                <Main/>
            </React.StrictMode>
        </BrowserRouter>
    );
}

export default App;
