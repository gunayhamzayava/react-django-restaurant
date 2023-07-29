import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Login from "./../components/Login";
import Signup from "./../components/Signup";

function Home() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  const [contactOption, setContactOption] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  const handleContactOptionChange = (event) => {
    setContactOption(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Contact Option:", contactOption);
    console.log("Email:", email);
    console.log("Phone:", phone);
  };

  useEffect(() => {
    fetch("countryCodes.json")
      .then((response) => response.json())
      .then((data) => {
        setCountryCodes(data);
      })
      .catch((error) => {
        console.error("Error fetching country codes:", error);
      });
  }, []);

  const handleCountryCodeChange = (event) => {
    setSelectedCountryCode(event.target.value);
  };

  const [openDiv, setOpenDiv] = useState(null);

  const handleDivClick = (index) => {
    setOpenDiv((prevOpenDiv) => (prevOpenDiv === index ? null : index));
  };

  return (
    <>
      <div className="header-navbar">
        <navbar>
          <div className="container-ay">
            <div className="position">
              <div className="navigation-home">
                <div>
                  <i className="fa-solid fa-mobile-screen-button"></i>
                  <Link to={`/zomatoapp`}>
                    <a href="">Get the App</a>
                  </Link>
                </div>
                <div>
                  <p>
                    <Link to={`/who-we-are/`}>Investor Relations</Link>
                  </p>
                  <p>
                    <a href="http://127.0.0.1:8000/api/restaurants/">
                      Add restaurant
                    </a>
                  </p>
                  <p>
                    <a onClick={openLoginModal}>Login</a>
                  </p>
                  <p>
                    <a onClick={openSignupModal}>Sign up</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </navbar>
        <Modal isOpen={loginModalOpen} onRequestClose={closeLoginModal}>
          <Login onClose={closeLoginModal} />
        </Modal>
        <Modal isOpen={signupModalOpen} onRequestClose={closeSignupModal}>
          <Signup onClose={closeSignupModal} />
        </Modal>
        <header className="home">
          <div className="container-ay">
            <div className="homepage">
              <img
                src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
                alt=""
              />
              <h1>Discover the best food & drinks in Baku</h1>
              <div className="searchbox">
                <div className="search-city">
                  <i className="fa-solid fa-location-dot"></i>
                  <input
                    type="text"
                    placeholder="Baku, 28 May, Sahil, Narimanov |"
                  />
                  <i className="fa-solid fa-sort-up"></i>|
                </div>
                <div className="search-restaurant">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input
                    type="text"
                    placeholder="Search for restaurant, cuisine or a dish"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <main className="container-ay">
        <section className="order-sec">
          <div className="order">
            <Link to={`/delivery`}>
              <div className="order-img">
                <img
                  src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                  alt=""
                />
              </div>
              <div className="order-p">
                <p>Order Online</p>
                <p>Stay home and order to your doorstep</p>
              </div>
            </Link>
          </div>
          <div className="order">
            <Link to={`/diningout`}>
              <div className="order-img">
                <img
                  src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                  alt=""
                />
              </div>
              <div className="order-p">
                <p>Dining</p>
                <p>View the cities favourite dining venues</p>
              </div>
            </Link>
          </div>
          <div className="order">
            <Link to={`/nightlife`}>
              <div className="order-img">
                <img
                  src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                  alt=""
                />
              </div>
              <div className="order-p">
                <p>Nightlife and Clubs</p>
                <p>Explore the city’s top nightlife outlets</p>
              </div>
            </Link>
          </div>
        </section>
        <section className="collection-div">
          <div className="collect-header">
            <h1>Collections</h1>
            <div>
              <p>
                Explore curated lists of top restaurants, cafes, pubs, and bars
                in Delhi NCR, based on trends
              </p>
            </div>
          </div>
          <div className="collection-blog">
            <div
              className="collect-img"
              style={{
                backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%), url("https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg?output-format=webp")`,
                height: "25rem",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "inline",
              }}
            >
              <Link to="/collection1">
                <div className="collect-img-p">
                  <p>Celeb-loved Places</p>
                  <p>
                    10 Places <i className="fa-solid fa-caret-right"></i>
                  </p>
                </div>
              </Link>
            </div>

            <div
              className="collect-img"
              style={{
                backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%), url("https://b.zmtcdn.com/data/collections/ba34f5659db282f10729ed6773f278d2_1688041325.png?output-format=webp")`,
                height: "25rem",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "inline",
              }}
            >
              <Link to="/collection2">
                <div className="collect-img-p">
                  <p>Unique Dining Experiences</p>
                  <p>
                    9 Places <i className="fa-solid fa-caret-right"></i>
                  </p>
                </div>
              </Link>
            </div>

            <div
              className="collect-img"
              style={{
                backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%), url("https://b.zmtcdn.com/data/collections/aaccef7199995c73258750f61c1961f0_1688041059.jpg?output-format=webp")`,
                height: "25rem",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "inline",
              }}
            >
              <Link to="/collection3">
                <div className="collect-img-p">
                  <p>Unique Dining Experiences</p>
                  <p>
                    13 Places <i className="fa-solid fa-caret-right"></i>
                  </p>
                </div>
              </Link>
            </div>

            <div
              className="collect-img"
              style={{
                backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%), url("https://b.zmtcdn.com/data/collections/ef1c6eee407e8faa590c5fab1e5fd5c3_1679127320.jpg?output-format=webp")`,
                height: "25rem",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "inline",
              }}
            >
              <Link to="/collection4">
                <div className="collect-img-p">
                  <p>Unique Dining Experiences</p>
                  <p>
                    21 Places <i className="fa-solid fa-caret-right"></i>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="popular-location-sec">
          <div className="location_header">
            <p>Popular localities in and around Baku</p>
          </div>
          <div className="location-buttons">
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <h6>Connaught Place</h6>
                  <p>256 places</p>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <h6>Connaught Place</h6>
                  <p>256 places</p>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <h6>Connaught Place</h6>
                  <p>256 places</p>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <h6>Connaught Place</h6>
                  <p>256 places</p>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <h6>Connaught Place</h6>
                  <p>256 places</p>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <h6>Connaught Place</h6>
                  <p>256 places</p>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <h6>Connaught Place</h6>
                  <p>256 places</p>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <h6>Connaught Place</h6>
                  <p>256 places</p>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <h6>Connaught Place</h6>
                  <p>256 places</p>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>
      <section className="app-sec">
        <div className="zomato-app container-ay">
          <div className="app-image">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
              alt=""
            />
          </div>
          <div className="zomato-app-text">
            <h1>Get the Zomato app</h1>
            <p>
              We will send you a link, open it on your phone to download the app
            </p>
            <div className="radio-option">
              <form onSubmit={handleSubmit}>
                <div className="select-options">
                  <div>
                    <input
                      type="radio"
                      id="emailOption"
                      name="contactOption"
                      value="email"
                      checked={contactOption === "email"}
                      onChange={handleContactOptionChange}
                    />
                    <label htmlFor="emailOption">Email</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="phoneOption"
                      name="contactOption"
                      value="phone"
                      checked={contactOption === "phone"}
                      onChange={handleContactOptionChange}
                    />
                    <label htmlFor="phoneOption">Phone</label>
                  </div>
                </div>
                {contactOption === "email" && (
                  <div className="input-submit">
                    <input
                      type="email"
                      id="emailInput"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Email"
                    />
                    <button type="submit">Share App Link</button>
                  </div>
                )}
                {contactOption === "phone" && (
                  <div className="input-submit">
                    <div>
                      <select
                        id="countryCode"
                        value={selectedCountryCode}
                        onChange={handleCountryCodeChange}
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.code}
                          </option>
                        ))}
                      </select>
                      <p>|</p>
                      <input
                        type="tel"
                        id="phoneInput"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="bura yazın..."
                      />
                    </div>
                    <button type="submit">Share App Link</button>
                  </div>
                )}
              </form>
            </div>
            <div className="appfromdiv">
              <p>Download app from</p>
              <div className="appfrom">
                <img
                  src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                  alt=""
                />
                <img
                  src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="near-location-sec container-ay">
        <div className="near-header">
          <h1>Explore options near me</h1>
        </div>
        <div className="near-options">
          <div>
            <div onClick={() => handleDivClick(1)}>
              <p>Popular cuisines near me</p>
              <i
                className={`fa-solid fa-chevron-${
                  openDiv === 1 ? "up" : "down"
                }`}
              ></i>
            </div>
            {openDiv === 1 && (
              <div className="cuisine-near-option">
                <ul>
                  <li>
                    <a href="">Bakery food near me</a>
                  </li>
                  <li>
                    <a href="">Beverages food near me</a>
                  </li>
                  <li>
                    <a href="">Biryani food near me</a>
                  </li>
                  <li>
                    <a href="">Burger food near me</a>
                  </li>
                  <li>
                    <a href="">Chinese food near me</a>
                  </li>
                  <li>
                    <a href="">Continental food near me</a>
                  </li>
                  <li>
                    <a href="">Desserts food near me</a>
                  </li>
                  <li>
                    <a href="">Italian food near me</a>
                  </li>
                  <li>
                    <a href="">Kebab food near me</a>
                  </li>
                  <li>
                    <a href="">Mithai food near me</a>
                  </li>
                  <li>
                    <a href="">Momos food near me</a>
                  </li>
                  <li>
                    <a href="">Mughlai food near me</a>
                  </li>
                  <li>
                    <a href="">North Indian food near me</a>
                  </li>
                  <li>
                    <a href="">Pasta food near me</a>
                  </li>
                  <li>
                    <a href="">Pizza food near me</a>
                  </li>
                  <li>
                    <a href="">Rolls food near me</a>
                  </li>
                  <li>
                    <a href="">Sandwich food near me</a>
                  </li>
                  <li>
                    <a href="">Shake food near me</a>
                  </li>
                  <li>
                    <a href="">South Indian food near me</a>
                  </li>
                  <li>
                    <a href="">Street food near me</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div onClick={() => handleDivClick(2)}>
              <p>Popular restaurant types near me</p>
              <i
                className={`fa-solid fa-chevron-${
                  openDiv === 1 ? "up" : "down"
                }`}
              ></i>
            </div>
            {openDiv === 2 && (
              <div className="restaurant-near-option">
                <ul>
                  <li>
                    <a href="">Bakeries near me</a>
                  </li>
                  <li>
                    <a href="">Bars near me</a>
                  </li>
                  <li>
                    <a href="">Beverage Shops near me</a>
                  </li>
                  <li>
                    <a href="">Bhojanalya near me</a>
                  </li>
                  <li>
                    <a href="">Cafés near me</a>
                  </li>
                  <li>
                    <a href="">Casual Dining near me</a>
                  </li>
                  <li>
                    <a href="">Clubs near me</a>
                  </li>
                  <li>
                    <a href="">Cocktail Bars near me</a>
                  </li>
                  <li>
                    <a href="">Confectioneries near me</a>
                  </li>
                  <li>
                    <a href="">Dessert Parlors near me</a>
                  </li>
                  <li>
                    <a href="">Dhabas near me</a>
                  </li>
                  <li>
                    <a href="">Fine Dining near me</a>
                  </li>
                  <li>
                    <a href="">Food Courts near me</a>
                  </li>
                  <li>
                    <a href="">Food Trucks near me</a>
                  </li>
                  <li>
                    <a href="">Irani Cafes near me</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div onClick={() => handleDivClick(3)}>
              <p>Top Restaurant Chains</p>
              <i
                className={`fa-solid fa-chevron-${
                  openDiv === 1 ? "up" : "down"
                }`}
              ></i>
            </div>
            {openDiv === 3 && (
              <div className="chains-near-option">
                <ul>
                  <li>
                    <a href="">Bikanervala</a>
                  </li>
                  <li>
                    <a href="">Biryani Blues</a>
                  </li>
                  <li>
                    <a href="">BTW</a>
                  </li>
                  <li>
                    <a href="">Burger King</a>
                  </li>
                  <li>
                    <a href="">Burger Singh</a>
                  </li>
                  <li>
                    <a href="">Domino</a>
                  </li>
                  <li>
                    <a href="">Dunkin Donuts</a>
                  </li>
                  <li>
                    <a href="">Haldiram</a>
                  </li>
                  <li>
                    <a href="">KFC</a>
                  </li>
                  <li>
                    <a href="">Krispy Kreme</a>
                  </li>
                  <li>
                    <a href="">McDonald</a>
                  </li>
                  <li>
                    <a href="">Moti Mahal Delux</a>
                  </li>
                  <li>
                    <a href="">Om Sweets & Snacks</a>
                  </li>
                  <li>
                    <a href="">Paradise Biryani</a>
                  </li>
                  <li>
                    <a href="">Pizza Hut</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div onClick={() => handleDivClick(4)}>
              <p>Cities We Deliver To</p>
              <i
                className={`fa-solid fa-chevron-${
                  openDiv === 1 ? "up" : "down"
                }`}
              ></i>
            </div>
            {openDiv === 4 && (
              <div className="cities-near-option">
                <ul>
                  <li>
                    <a href="">Delhi NCR</a>
                  </li>
                  <li>
                    <a href="">Kolkata</a>
                  </li>
                  <li>
                    <a href="">Mumbai</a>
                  </li>
                  <li>
                    <a href="">Bengaluru</a>
                  </li>
                  <li>
                    <a href="">Pune</a>
                  </li>
                  <li>
                    <a href="">Hyderabad</a>
                  </li>
                  <li>
                    <a href="">Chennai</a>
                  </li>
                  <li>
                    <a href="">Lucknow</a>
                  </li>
                  <li>
                    <a href="">Kochi</a>
                  </li>
                  <li>
                    <a href="">Jaipur</a>
                  </li>
                  <li>
                    <a href="">Ahmedabad</a>
                  </li>
                  <li>
                    <a href="">Chandigarh</a>
                  </li>
                  <li>
                    <a href="">Goa</a>
                  </li>
                  <li>
                    <a href="">Indore</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;