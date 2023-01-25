import React from "react";
import './index.css'

class Header extends React.Component{
    render(){
        return(
            <section id="header">
        <div class="logo">
            Tiffome
        </div>

        <div>
            <ul id="navbar">
    
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="terms.html">Terms</a></li>

            </ul>
        </div>
    </section>
        )
    }
}

export default Header;