import React, { useState, useEffect, useRef } from "react";
import "../components/WhoWeAre.css";
import "./Responsive__.css";
import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>;

const handleClick = () => {
  window.scrollTo(0, 800);
};

function WhoWeAre() {
  const [selectedPage, setselectedPage] = useState("whoweare");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/blogs/")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="main">
      <div className="image-with-text">
        <div className="text-with-img">
          <h2>Better food for more people</h2>
          <p onClick={handleClick}>scroll for more</p>
        </div>
        <div className="ul__nav">
          <ul>
            <Link to={"/"}>
              <li
                className={selectedPage === "home" ? "active" : ""}
                onClick={() => setselectedPage("home")}
              >
                Home
              </li>
            </Link>
            <Link to={"/who-we-are/"}>
              <li
                className={selectedPage === "whoweare" ? "active" : ""}
                onClick={() => setselectedPage("whoweare")}
              >
                Who We Are
              </li>
            </Link>
            <Link to={"/contact/"}>
              <li
                className={selectedPage === "contact" ? "active" : ""}
                onClick={() => setselectedPage("contact")}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="zomato-logo">
          <img src="https://b.zmtcdn.com/web_assets/ee34583804919f1d9d5a45a32db80a891604300478.png" />
        </div>
      </div>
      <div className="sliders">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://b.zmtcdn.com/web_assets/7e2c9e22ffe284beaec828fb62c4bfef1563875343.jpeg?output-format=webp"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Assortment</h3>
              <p>
                Driving the force of <span>assortment</span>
              </p>
              <p>
                For over a decade now, we’ve been empowering our customers in
                discovering new tastes and experiences across countries. By
                putting together meticulous information for our customers, we
                enable them to make an informed choice.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://b.zmtcdn.com/web_assets/cfa63c11504ffe735afd3ef0383a06de1563875358.jpeg?output-format=webp"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Affordability</h3>
              <p>
                Focusing on <span>affordability</span>
              </p>
              <p>
                The benefits of providing an interesting choice are embodied by
                the success of Zomato Pro. We are leaving no stone unturned when
                it comes to making food more affordable without compromising on
                the profitability of a given restaurant.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://b.zmtcdn.com/web_assets/0e000a058ca6e5b84d5e6b486cfd00651563875325.jpeg?output-format=webp"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Accessibility</h3>
              <p>
                Boosting <span>accessibility</span> for customers
              </p>
              <p>
                Our delivery service is reaching more and more cities. We are
                actively growing our services - table reservation, Zomato for
                Enterprise and are continuing to power Feeding India.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://b.zmtcdn.com/web_assets/4c4754484b185afd6d88e357de72f7de1563874934.jpeg?output-format=webp"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Quality</h3>
              <p>
                Improving <span>quality</span> of food
              </p>
              <p>
                We are committed to nurturing a neutral platform and are helping
                food establishments maintain high standards through Hyperpure.
                Food Hygiene Ratings is a coveted mark of quality among our
                restaurant partners.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="whoarewe">
        <div className="whoarewe-text">
          <h1>Who are we?</h1>
          <br />
          <div className="red-line"></div>
          <br />
          <p>
            Launched in 2010, Our technology platform connects customers, <br />{" "}
            restaurant partners and delivery partners, serving their multiple{" "}
            <br /> needs. Customers use our platform to search and discover{" "}
            <br /> restaurants, read and write customer generated reviews and
            view <br /> and upload photos, order food delivery, book a table and
            make <br /> payments while dining-out at restaurants. On the other
            hand, we <br /> provide restaurant partners with industry-specific
            marketing tools <br /> which enable them to engage and acquire
            customers to grow their <br /> business while also providing a
            reliable and efficient last mile <br /> delivery service. We also
            operate a one-stop procurement solution, <br /> Hyperpure, which
            supplies high quality ingredients and kitchen <br /> products to
            restaurant partners. We also provide our delivery <br /> partners
            with transparent and flexible earning opportunities.
          </p>
        </div>
        <div className="whoweare-img">
          <img
            src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp"
            alt=""
          />
        </div>
      </div>
      <div className="from-our-blog">
        <div className="form-blog">
          <h3>From our blog</h3>
          <p>
            Explore our blog for insightful articles, personal reflections,
            impactful resources, and ideas that inspire us at Zomato
          </p>
        </div>
        <div className="container_blog">
          {blogs.slice(0,3).map((blog) => (
            <div key={blog.id}>
              <Link to={`/blog/${blog.id}`}>
                <div>
                  <img src={blog.image} alt="" />
                </div>
                <div>
                  <h4>{blog.title}</h4>
                  <p>{blog.created_date}</p>
                  <span>{blog.description}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="img-collage">
        <div className="header-img">
          <h2>Glimpses of life at Zomato</h2>
        </div>
        <br />

        <div className="row">
          <div className="column">
            <img src="https://b.zmtcdn.com/web/about/945996bdd3db3d99d80a2112cea29d371563210246.png?output-format=webp" />
            <img src="https://b.zmtcdn.com/web/about/assets/1279699be7bf8786fda44f92afc9c3511563126954.png?output-format=webp" />
            <img src="https://b.zmtcdn.com/web/about/ff03481fd5bab46412231b3d9de45cd21563211547.jpeg?output-format=webp" />
          </div>
          <div className="column">
            <img src="https://b.zmtcdn.com/web/9f3cfb04b9084ef3a1b6bb6097af0d1f1562688573.png?output-format=webp" />
            <img src="https://b.zmtcdn.com/web/about/2164bf45244e5c8444183e44500bbce01563210961.png?output-format=webp" />
            <img src="https://b.zmtcdn.com/web/702308c792047b99932a07c7b0d7473c1562688860.png?output-format=webp" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
