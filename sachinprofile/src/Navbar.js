import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './App.css';


const Navbar = () => {
    return (
        <div class="nav-header">
            <div class="nav-brand">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" class="bi bi-laptop" viewBox="0 0 16 16">
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                </svg>

            </div>
            <i class="fa fa-bars fa-3x"></i>
            <div class="header-links">
                <ul>
                    <li data-menuanchor="fourthPage"><a href="contact">CONTACT</a></li>
                    <li data-menuanchor="thirdPage"><a href="portfolio">PORTFOLIO</a></li>
                    <li data-menuanchor="secondPage"><a href="about">ABOUT</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar
