export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrapper">
          <div className="footer-container">
            <div className="footer-left">
              <img src="Images/jai-jawan-logo.png" alt="" />
            </div>

            <div className="footer-center">
              <h4 className="list-title">Quick Links</h4>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="footer-right">
              <h4 className="list-title">Follow Us on</h4>
              <div className="social-icons">
                <a href="">
                  <img src="Images/facebook.png" alt="" />
                </a>
                <a href="">
                  <img src="Images/instagram.png" alt="" />
                </a>
                <a href="">
                  <img src="Images/twitter.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-credit">
        <p>
          Made With &hearts; By{" "}
          <a href="https://www.abhinaynarayan.com/">
            <span id="footer-credit-text">Abhinay Narayan Singh</span>
          </a>
        </p>
      </div>
    </>
  );
}
