import { useState } from "react";

function Signup({ onClose, onLoginClick }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Phone:", phone);
  };

  const handleClose = () => {
    onClose();
  };

  const handleLoginClick = () => {
    onClose();
    onLoginClick();
  };

  return (
    <div className="colorbg">
      <section className="signup-sec">
        <div className="signup-class">
          <p>Signup</p>
          <i className="fa-solid fa-xmark" onClick={handleClose}></i>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="sign-input">
            <div className="sign-input-div">
              <input
                type="tel"
                id="phoneInput"
                value={phone}
                onChange={handlePhoneChange}
                placeholder=" Full Name"
              />
              <input
                type="email"
                id="emailInput"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="checkbox-signup">
            <div>
              <input type="checkbox" />
              <p>
                I agree to Zomato's
                <a href="">
                  Terms of Service, Privacy Policy and Content Policies
                </a>
              </p>
            </div>
            <button disabled type="submit">
              Create account
            </button>
          </div>
        </form>
        <p className="or">
          <hr />
          <p>or</p>
        </p>
        <div className="email-signup">
          <a href="">
            <i className="fa-brands fa-google"></i> Continue with Google
          </a>
        </div>
        <div className="create-account">
          <p>Already have an account? </p>
          <a onClick={handleLoginClick}>Login</a>
        </div>
      </section>
    </div>
  );
}

export default Signup;
