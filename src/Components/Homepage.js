export default function Homepage() {


  return (
    <>
      {/* <!-- slider section start here --> */}
      
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 4</div>
          <img src="Images/slider-1.webp" />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 4</div>
          <img src="Images/slider-2.webp" />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 4</div>
          <img src="Images/slider-3.webp" />
          <div className="text">Caption Three</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">4 / 4</div>
          <img src="Images/slider-4.webp" />
          <div className="text">Caption Four</div>
        </div>

        <a className="prev" onClick="plusSlides(-1)">
          ❮
        </a>
        <a className="next" onClick="plusSlides(1)">
          ❯
        </a>
      </div>

      <div>
        {/* <span className="dot" onClick={currentSlide(1)}></span> */}
        {/* <span className="dot" onClick={currentSlide(2)}></span> */}
        <span className="dot" onClick="currentSlide(3)"></span>
        <span className="dot" onClick="currentSlide(4)"></span>
      </div>
      <br />

      {/* <!-- sldider section end here -->

                <!-- Product Section Start --> */}
      <div className="product-section">
        <h2>Products</h2>
        <div className="main-product-section">
          <div className="product-col">
            <p>Commode</p>
            <img src="product-images/commode.webp" alt="" />
          </div>
          <div className="product-col">
            <p>Tiles</p>
            <img src="product-images/tiles.webp" alt="" />
          </div>
          <div className="product-col">
            <p>Wash Basin</p>
            <img src="product-images/wash-basin.webp" alt="" />
          </div>
          <div className="product-col">
            <p>Shower</p>
            <img src="product-images/showers.webp" alt="" />
          </div>
          <div className="product-col">
            <p>Borewell Pipe</p>
            <img src="product-images/borewell-pipes.webp" alt="" />
          </div>
          <div className="product-col">
            <p>Fitting</p>
            <img src="product-images/fitting.webp" alt="" />
          </div>
          <div className="product-col">
            <p>Pipe</p>
            <img src="product-images/pipes.webp" alt="" />
          </div>
          <div className="product-col">
            <p>Garden Pipe</p>
            <img src="product-images/garden-pipes.webp" alt="" />
          </div>
          <div className="product-col">
            <p>Submersible</p>
            <img src="product-images/submersible.webp" alt="" />
          </div>
          <div className="product-col">
            <p>Water Pumps</p>
            <img src="product-images/water-pumps.webp" alt="" />
          </div>
          <div className="product-col">
            <p>Water Tank</p>
            <img src="product-images/water-tank.webp" alt="" />
          </div>
          <div className="product-col">
            <p>Mirror</p>
            <img src="product-images/mirrors.webp" alt="" />
          </div>
        </div>
      </div>

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
            <a className="weDealBtn" href="cera-sanitaryware.html">
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14422.862164845665!2d82.9941516!3d25.3473247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e78bbd6a48f%3A0xb6d1b6f50bd334e6!2sJai%20Jawan%20Pipe%20And%20Hardware!5e0!3m2!1sen!2sin!4v1676432247897!5m2!1sen!2sin"
              width="600"
              height="450"
              frameBorder="0"
              allowFullScreen
            ></iframe>
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
      {/* <!-- Google map end here --> */}
      {/* <!-- contact section start here --> */}

      <div className="contact-container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="card mt-5">
              <div className="contact-title">
                <h2 className="text-center py-2"> Contact Us </h2>
                <hr />
                {/* <?php 
                          $Msg = "";
                          if(isset($_GET['error']))
                          {
                              $Msg = " Please Fill in the Blanks ";
                              echo '<div className="alert alert-danger">'.$Msg.'</div>';
                          }

                          if(isset($_GET['success']))
                          {
                              $Msg = " Your Message Has Been Sent ";
                              echo '<div className="alert alert-success">'.$Msg.'</div>';
                          }
                      
                      ?> */}
              </div>
              <div className="contact-body">
                <form action="process.php">
                  <input
                    type="text"
                    name="UName"
                    placeholder="Name"
                    className="form-control mb-2"
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    className="form-control mb-2"
                  />
                  <textarea
                    name="msg"
                    className="form-control mb-2"
                    placeholder="Write The Message"
                  ></textarea>
                  <input
                    type="submit"
                    className="btn btn-success"
                    name="btn-send"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
