import React from "react";
import "./FeedBack.css";
import "./Responsive__.css";

function FeedBack() {
  return (
    <div className="main">
      <section>
        <div className="bg-img">
          <div className="img-textt">
            <p>We would love to hear from you!</p>
          </div>
        </div>
      </section>
      <div className="feedback-and-report">
        <div className="feedback__content">
          <img src="https://b.zmtcdn.com/webFrontend/664c057ea182068abc11230bcd4266761602141655.jpeg?output-format=webp" alt="" />
          <h2>
            Your feedback has been noted and we will take the necesarry actioon.
          </h2>
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
              your app to <br /> connect to our customer support <br /> team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
