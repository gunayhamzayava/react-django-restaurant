import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="">
        <div className="footerdiv container-ay">
          <div className="footer-zomato-img">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
              alt=""
            />
          </div>
          <div className="footer-about-div">
            <ul className="footer-div-column">
              <li>
                <h6>ABOUT ZOMATO</h6>
              </li>
              <li>
                <Link to={"/who-we-are"}>Who We Are</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <a href="">Work With Us</a>
              </li>
              <li>
                <a href="">Investor Relations</a>
              </li>
              <li>
                <a href="">Report Fraud</a>
              </li>
              <li>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
            </ul>
            <ul className="footer-div-column">
              <li>
                <h6>Zomaverse</h6>
              </li>
              <li>
                <a href="">Zomato</a>
              </li>
              <li>
                <a href="">Blinkit</a>
              </li>
              <li>
                <a href="">Feeding India</a>
              </li>
              <li>
                <a href="">Hyperpure</a>
              </li>
              <li>
                <a href="">Zomaland</a>
              </li>
            </ul>
            <ul className="footer-div-column">
              <li>
                <h6>For Restaurants</h6>
              </li>
              <li>
                <a href="">Partner With Us</a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.application.services.partner&hl=en_IN&gl=US">
                  Apps For You
                </a>
              </li>
              <li>
                <h6>For Enterprises</h6>
              </li>
              <li>
                <a href="">Zomato For Enterprise</a>
              </li>
            </ul>
            <ul className="footer-div-column">
              <li>
                <h6>Learn More</h6>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Security</a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
              <li>
                <a href="">Sitemap</a>
              </li>
            </ul>
            <ul className="footer_social">
              <li>
                <h6>SOCIAL LINKS</h6>
              </li>
              <li className="footer-icons">
                <a href="https://www.linkedin.com/company/zomato/?originalSubdomain=in">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/zomato/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://twitter.com/zomato">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.youtube.com/zomato">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="https://www.facebook.com/zomato">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-hr">
            <hr />
            <p>
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners. 2008-2023 © Zomato™
              Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;