import { useState, useEffect } from "react";

function Login({ onClose, onSignupClick }) {
  const [phone, setPhone] = useState("");
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
  const handleClose = () => {
    onClose();
  };

  const handleSignupClick = () => {
    onClose();
    onSignupClick();
  };

  return (
    <div className="colorbg">
      <section className="login-sec">
        <div className="login-class">
          <p>Login</p>
          <i className="fa-solid fa-xmark" onClick={handleClose}></i>
        </div>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <div className="login-input input-submit">
              <div className="login-input-div">
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
                  placeholder="Phone"
                />
              </div>
              <button type="submit">Send One Time Password</button>
            </div>
            <p className="or">
              <hr />
              <p>or</p>
            </p>
            <div className="email-signup">
              <a href="">
                <i className="fa-solid fa-envelope"></i> Continue with Email
              </a>
              <a href="">
                <i className="fa-brands fa-google"></i> Continue with Google
              </a>
            </div>
            <div className="hr">
              <hr />
            </div>
          </form>
          <div className="create-account">
            <p>New to Zomato? </p>
            <a href="#" onClick={handleSignupClick}>
              Create account
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
