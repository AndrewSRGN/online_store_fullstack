import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";
import Navbar from "../components/UI/Navbar/Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;