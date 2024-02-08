import React, { useState } from "react";


export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
       <nav className={click ? "navbar nav-open" : "navbar"}>
        <h2 className="logo"><a href="/"><img src="./Images/jj-logo.webp" alt=""/></a></h2>
        <ul className="menu">
            <li className="menu-item"><a href="/">Home</a></li>
            <li className="menu-item"><a href="/product">Product</a></li>
            <li className="menu-item"><a href="./contact">Contact</a></li>
            <li className="menu-item"><a href="">Pricing</a></li>
            <li className="dropdown">
              <button className="dropbtn">Our Company</button>
              <div className="dropdown-content">
                <a href="/about-us">About</a>
                <a href="/chairmanmessage">Chairman</a>
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
        <button className="menu-btn" onClick={handleClick}>
            <img src={click ? "https://abhinaynarayan.com/jai-jawan-react-app11/Images/x-circle.svg" : "https://abhinaynarayan.com/jai-jawan-react-app11/Images/list.svg"} alt="" className={click ?  "close-icon" : "menu-icon" }/>
            
        </button>
  </nav>
    </>
  )
}
