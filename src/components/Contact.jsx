import React, { useState } from "react";
import "./Contact.css";
import "./Responsive__.css";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/contacts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Teşekkürler! İletişim bilgileriniz kaydedildi.");
      } else {
        alert("Formu göndermek mümkün olmadı: " + data.error);
      }
    } 
    catch (error) {
      alert("Formu göndermek mümkün olmadı: " + error.message);
    }
  };

  return (
    <div className="mains">
      <section>
        <div className="bg-img">
          <div className="img-textt">
            <p>We would love to hear from you!</p>
          </div>
        </div>
      </section>

      <div className="submit-and-report">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                type="text"
                className="name"
                name="name"
                required="requried"
                value={formData.name}
                onChange={handleChange}
              />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input
                type="email"
                name="email"
                className="email"
                required="requried"
                value={formData.email}
                onChange={handleChange}
              />
              <span>Email Address</span>
            </div>
            <div className="inputBox">
              <textarea
                name="message"
                cols="70"
                rows="40"
                required="requried"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <span>Type text</span>
            </div>
            <button type="submit">
              Submit feedback
              {/* <Link to={"/feedback"}></Link> */}
            </button>
          </form>
        </div>
        <div className="report">
          <div className="report-safety">
            <h2>Report a Safety Emergency</h2>
            <p>
              We are committed to the safety of <br /> everyone using Zomato.
            </p>
            <a href="https://www.zomato.com/contact/emergency" target="_blank">
              Report here
            </a>
          </div>
          <div className="report-issue">
            <h2>Issue with your live order?</h2>
            <p>
              Click on the 'Support' or 'Online <br /> ordering help' section in
              your app to <br /> connect to our customer support <br />
              team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
