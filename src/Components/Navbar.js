import React from 'react'

export default function Navbar() {
    return(
        <nav className="navbar">
        <h2 className="logo"><img src="./Images/jj-logo.webp" alt=""/></h2>
        <ul className="menu">
            <li className="menu-item"><a href="">Home</a></li>
            <li className="menu-item"><a href="">Product</a></li>
            <li className="menu-item"><a href="./contact.html">Contact</a></li>
            <li className="menu-item"><a href="">Pricing</a></li>
            <li className="dropdown">
              <button className="dropbtn">Our Company</button>
              <div className="dropdown-content">
                <a href="about-us.html">About</a>
                <a href="chairman-message.html">Chairman</a>
                <a href="product.html">Product</a>
              </div>
          </li>
          <li className="dropdown">
              <button className="dropbtn">Our Business</button>
              <div className="dropdown-content">
                <a href="pipes-and-fitting.html">Pipes and Fitting</a>
                <a href="plumbing.html">Plumbing</a>
                <a href="sanitaryware.html">Sanitaryware</a>
                <a href="booring-material.html">Booring Material</a>
              </div>
          </li>
        </ul>
        <button className="menu-btn">
            <img src="./Images/list.svg" alt="" className="menu-icon"/>
            <img src="./Images/x-circle.svg" alt="" className="close-icon"/>
        </button>
    </nav>
    )
}