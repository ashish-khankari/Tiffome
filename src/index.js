import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import Navbar from './Components/Home/Navbar/Navbar';
import Footer from './Components/Home/Footer/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Navbar />
        <App />
        <Footer />

    </BrowserRouter>
);

