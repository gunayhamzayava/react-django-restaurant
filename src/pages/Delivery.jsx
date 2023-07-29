import Modal from "react-modal";
import Login from "./../components/Login";
import Signup from "./../components/Signup";
import Filters from "./../components/Filters";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const LOCAL_STORAGE_KEY = "deliveryData";
import axios from "axios";

function Delivery() {
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

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/foods/");
        const data = await response.json();
        setFoods(data);
        console.log("Foods data:", data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchFoods();
  }, []);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/foods");
        const data = await response.json();
        setFoods(data);
        console.log("Foods data:", data); // Check if data is fetched successfully
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchFoods();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  const filterTextByWordCount = (text, wordCount) => {
    if (!text) {
      return "";
    }

    const words = text.split(" ");

    if (words.length <= wordCount) {
      return text;
    }

    const filteredWords = words.slice(0, wordCount);
    const filteredText = filteredWords.join(" ");

    return filteredText + " ...";
  };

  const [filteredData, setFilteredData] = useState([]);
  const [showFilteredData, setShowFilteredData] = useState(false);

  useEffect(() => {
    // Fetch restaurant data from the API
    axios
      .get("http://127.0.0.1:8000/api/restaurants/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("delivery.json");
  //       const jsonData = await response.json();
  //       setData(jsonData.delivery);
  //       setFilteredData(jsonData.delivery);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(foods));
  }, [foods]);

  const filterByRating = (e) => {
    e.preventDefault()
    const filtered = data.filter((item) => item.rating > 4.0);
    setFilteredData(filtered); // Filtrelenmiş verileri güncelleyin
    setShowFilteredData(true);
  };

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleModalcuisines = () => {
  //   setIsOpen(!isOpen);
  // };

  const [startIndex, setStartIndex] = useState(0);
  const [visibleFoods, setVisibleFoods] = useState([]);
  const [firstOrders, setFirstOrders] = useState([]);
  const afterFilterData = localStorage.getItem("afterFilter")
  console.log("modaldan gelen melumat : "+afterFilterData)
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/firstorder/")
      .then((response) => setFirstOrders(response.data))
      .catch((error) => console.error(error));
  }, []);

  // const handleDelete = (id) => {
  //   axios
  //     .delete(`http://127.0.0.1:8000/api/firstorder/${id}/`)
  //     .then((response) => {
  //       // Silme işlemi başarılıysa veriyi güncelleyin ve sayfayı yenileyin.
  //       setFirstOrders((prevOrders) =>
  //         prevOrders.filter((order) => order.id !== id)
  //       );
  //       setVisibleFoods((prevFoods) =>
  //         prevFoods.filter((food) => food.id !== id)
  //       );
  //     })
  //     .catch((error) => console.error(error));
  // };

  useEffect(() => {
    const updateVisibleFoods = () => {
      const endIndex = startIndex + 6;
      const newVisibleFoods = firstOrders.slice(startIndex, endIndex);
      setVisibleFoods(newVisibleFoods);
    };

    updateVisibleFoods();
  }, [startIndex, firstOrders]);

  const handleNext = () => {
    const newStartIndex = startIndex + 1;
    setStartIndex(newStartIndex);

    if (newStartIndex < firstOrders.length) {
      setStartIndex(newStartIndex);
    }
  };

  const handlePrevious = () => {
    const newStartIndex = startIndex - 1;
    setStartIndex(newStartIndex);

    if (newStartIndex >= 0) {
      setStartIndex(newStartIndex);
    }
  };

  return (
    <>
      <nav className="delivery-nav">
        <div className="container-ay">
          <div className="delivery-img">
            <Link to={`/`}>
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt=""
              />
            </Link>

            <div className="delivery-search">
              <div className="searchbox">
                <div className="search-city-delivery">
                  <i className="fa-solid fa-location-dot"></i>
                  <input type="text" placeholder="Baku, 28 May, Sahil |" />
                  <i className="fa-solid fa-sort-up"></i>|
                </div>
                <div className="search-restaurant-delivery">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input
                    type="text"
                    placeholder="Search for restaurant, cuisine or a dish"
                  />
                </div>
              </div>
              <div className="loginregister">
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
      </nav>
      <Modal isOpen={loginModalOpen} onRequestClose={closeLoginModal}>
        <Login onClose={closeLoginModal} />
      </Modal>
      <Modal isOpen={signupModalOpen} onRequestClose={closeSignupModal}>
        <Signup onClose={closeSignupModal} />
      </Modal>
      <main className="container-ay">
        <div>
          <p className="pages">
            <Link to={`/`}>Home</Link>/ <Link>Baku</Link>/<Link> 28 may</Link>
          </p>
        </div>
        <section className="delivery-option">
          <div>
            <img
              src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
              alt=""
            />
            <h1>Delivery</h1>
          </div>
          <div>
            <img
              src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
              alt=""
            />
            <h1>Dining Out</h1>
          </div>
          <div>
            <img
              src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
              alt=""
            />
            <h1>Nightlife</h1>
          </div>
        </section>
      </main>
      <section className="filter-sec">
        <div className="delivery-filter container-ay">
          <a href="#" onClick={toggleModal}>
            <i className="fa-solid fa-sliders"></i>Filters
          </a>
          {isModalOpen && <Filters onClose={toggleModal} />}
          <a href="" onClick={filterByRating}>
            Rating: 4.0+
          </a>
          <a href="#">
            Cuisines
            <i className="fa-solid fa-chevron-down"></i>
          </a>
        </div>
        <div>
          <div className="choise-bg">
            <div className="container-ay">
              <p>Inspiration for your first order</p>
              <div className="sort-delivery">
                {startIndex > 0 && (
                  <i
                    onClick={handlePrevious}
                    className="fa-solid fa-chevron-left"
                  ></i>
                )}
                <div className="food-choice">
                  {visibleFoods.map((order) => (
                    <div key={order.id} className="food-sort">
                      <img
                        src={order.image}
                        alt={order.name}
                        className="food-image"
                      />
                      <h1>{order.name}</h1>
                    </div>
                  ))}
                </div>
                {startIndex + 6 < firstOrders.length && (
                  <i
                    onClick={handleNext}
                    className="fa-solid fa-chevron-right"
                  ></i>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container-ay">
          <div className="orderonline">
            <h1>Order food online in Connaught Place</h1>
            <div>
              <div className="order-set-delivery">
                {showFilteredData
                  ? filteredData.map((item) => (
                      <div key={item.id} className="list-data-delivery">
                        <div
                          className="image-food-list"
                          style={{
                            backgroundImage: `url(${item.restaurant_image})`,
                          }}
                        >
                          <h5>100-ə qədər 50% ENDİRİM</h5>
                          <p>{item.minute} min</p>
                        </div>
                        <div>
                          <div className="cafe-about-delivery">
                            <p>{item.name}</p>
                            <p>
                              {item.rating} <i className="fa-solid fa-star"></i>
                            </p>
                          </div>
                          <div className="cost-name">
                            <p>{filterTextByWordCount(item.meals, 3)}</p>
                            <p>{item.cost} ₼</p>
                          </div>
                        </div>
                      </div>
                    ))
                  : data.map((item) => (
                      <div key={item.id} className="list-data-delivery">
                        <div
                          className="image-food-list"
                          style={{
                            backgroundImage: `url(${item.restaurant_image})`,
                          }}
                        >
                          <h5>100-ə qədər 50% ENDİRİM</h5>
                          <p>{item.minute} min</p>
                        </div>
                        <div>
                          <div className="cafe-about-delivery">
                            <p>{item.name}</p>
                            <p>
                              {item.rating} <i className="fa-solid fa-star"></i>
                            </p>
                          </div>
                          <div className="cost-name">
                            <p>{filterTextByWordCount(item.meals, 3)}</p>
                            <p>{item.cost} ₼</p>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Delivery;