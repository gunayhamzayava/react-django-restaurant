import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Login from "./../components/Login";
import Signup from "./../components/Signup";

function ZomatoApp() {
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

  return (
    <>
      <navbar className="header-app">
        <div className="container-ay">
          <div className="navigation-home">
            <div className="delivery-img">
              <Link to={`/`}>
                <img
                  src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                  alt=""
                />
              </Link>
            </div>

            <div className="navbar-app-div">
              <a onClick={openLoginModal}>Login</a>
              <a onClick={openSignupModal}>Sign up</a>
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

      <section className="app-sec page-app-sec">
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
    </>
  );
}

export default ZomatoApp;