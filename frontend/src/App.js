import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Home from "./Components/Home/Home";

function App()
{
    return(
        <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>

        </div>
        </BrowserRouter>
    );
}

export default App;
