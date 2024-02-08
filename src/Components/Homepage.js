import React from "react";
import Carousel from "./Carousel";
import MainPageContact from "./MainPageContact";

export function Homepage() {
  return (
    <>

      <Carousel/>
         

      <div className="we-deals-h2">
        <h2>We Deals in</h2>
      </div>

      <div className="we-deals-in">
        <div className="we-sub-deals">
          <div className="wedeals">
            <img src="Images/we-deals-in-1.png" alt="sona field" />
            <ul>
              <li>Basin</li>
              <li>Table Top Basin</li>
              <li>Commode</li>
              <li>Urinal</li>
              <li>Cabinet Basin</li>
              <li>Cistern</li>
            </ul>
            <a className="weDealBtn" href="sona-field.html">
              Check More
            </a>
          </div>
          <div className="wedeals">
            <img src="Images/we-deals-in-2.jpg" alt="prince pipe and fitting" />
            <ul>
              <li>Pipes and Fitting</li>
              <li>CPVC</li>
              <li>PVC</li>
              <li>SWR</li>
            </ul>
            <a className="weDealBtn" href="prince-pipe-and-fitting.html">
              Check More
            </a>
          </div>
          <div className="wedeals">
            <img src="Images/we-deals-in-3.jpg" alt="cera" />
            <ul>
              <li>Commode</li>
              <li>Faucets</li>
              <li>Wash Basin</li>
              <li>Urinal</li>
              <li>Shower</li>
              <li>Table Top Basin</li>
              <li>Bathtub</li>
            </ul>
            <a className="weDealBtn" href="CeraSanitaryWare">
              Check More
            </a>
          </div>
          <div className="wedeals">
            <img src="Images/we-deals-in-4.png" alt="Crampton Graves" />
            <ul>
              <li>Booster Pump</li>
              <li>Agriculture Submersible</li>
              <li>Residentail Submersible</li>
              <li>Residentail Self Priming Pump</li>
            </ul>
            <a className="weDealBtn" href="prince-pipe-and-fitting.html">
              Check More
            </a>
          </div>
          <div className="wedeals">
            <img src="Images/we-deals-in-5.png" alt="varuna electric" />
            <ul>
              <li>Booster Pump</li>
              <li>Agriculture Submersible</li>
              <li>Residentail Submersible</li>
              <li>Residentail Self Priming Pump</li>
            </ul>
            <a className="weDealBtn" href="prince-pipe-and-fitting.html">
              Check More
            </a>
          </div>
          <div className="wedeals">
            <img src="Images/we-deals-in-6.png" alt="ksb pumps" />
            <ul>
              <li>Booster Pump</li>
              <li>Agriculture Submersible</li>
              <li>Residentail Submersible</li>
              <li>Residentail Self Priming Pump</li>
            </ul>
            <a className="weDealBtn" href="prince-pipe-and-fitting.html">
              Check More
            </a>
          </div>
          <div className="wedeals">
            <img src="Images/we-deals-in-7.png" alt="orio" />
            <ul>
              <li>Basin</li>
              <li>Table Top Basin</li>
              <li>Commode</li>
              <li>Urinal</li>
              <li>Cabinet Basin</li>
              <li>Cistern</li>
              <li>Faucets</li>
            </ul>
            <a className="weDealBtn" href="prince-pipe-and-fitting.html">
              Check More
            </a>
          </div>
          <div className="wedeals">
            <img src="Images/we-deals-in-8.png" alt="ashirvad pipes" />
            <ul>
              <li>Pipes and Fitting</li>
              <li>CPVC</li>
              <li>PVC</li>
              <li>SWR</li>
            </ul>
            <a className="weDealBtn" href="prince-pipe-and-fitting.html">
              Check More
            </a>
          </div>
          <div className="wedeals">
            <img src="Images/we-deals-in-9.png" alt="Kerovit" />
            <ul>
              <li>Commode</li>
              <li>Faucets</li>
              <li>Wash Basin</li>
              <li>Urinal</li>
              <li>Shower</li>
              <li>Table Top Basin</li>
              <li>Bathtub</li>
            </ul>
            <a className="weDealBtn" href="prince-pipe-and-fitting.html">
              Check More
            </a>
          </div>
          <div className="wedeals">
            <img src="Images/we-deals-in-10.png" alt="Lubi" />
            <ul>
              <li>Booster Pump</li>
              <li>Agriculture Submersible</li>
              <li>Residentail Submersible</li>
              <li>Residentail Self Priming Pump</li>
            </ul>
            <a className="weDealBtn" href="prince-pipe-and-fitting.html">
              Read More
            </a>
          </div>
          <div className="wedeals">
            <img src="Images/we-deals-in-11.png" alt="CRI Pumps" />
            <ul>
              <li>Booster Pump</li>
              <li>Agriculture Submersible</li>
              <li>Residentail Submersible</li>
              <li>Residentail Self Priming Pump</li>
            </ul>
            <a className="weDealBtn" href="prince-pipe-and-fitting.html">
              Read More
            </a>
          </div>
        </div>
      </div>

      <div className="address">
        <h2>ADDRESS</h2>
        <div className="location">
          <div className="google-map">
           <a href="https://goo.gl/maps/kHbQkpHVDdkQ7snG9"> <img
              src="Images/JaiJawan maps.webp"
              title="Google Maps"
            /></a>
          </div>
          <div className="loc-add">
            <p>
              Jai Jawan Pipe And Hardware <br />S 8/310- 1, Hukul Ganj Road,
              Khajuri Colony, <br />
              Varanasi, Uttar Pradesh 221002
            </p>
          </div>
        </div>
      </div>
      <br />
      <MainPageContact />
    </>
  );
}
