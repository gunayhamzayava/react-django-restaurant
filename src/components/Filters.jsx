import { useState, useEffect } from "react";
import Modal from "react-modal";

function Filters({ onClose, isOpen }) {
  const [selectedOption, setSelectedOption] = useState("sort");

  const handleFilterOptionClick = (option) => {
    setSelectedOption(option);
  };

  const [cuisineOptions, setCuisineOptions] = useState([]);

  useEffect(() => {
    fetch("delivery.json")
      .then((response) => response.json())
      .then((data) => {
        const options = data.cuisines.map((cuisine) => cuisine.option);
        setCuisineOptions(options);
      })
      .catch((error) => {
        console.error("Error fetching cuisine options:", error);
      });
  }, []);

  const [value, setValue] = useState("Any");

  const [filters, setFilters] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await fetch("delivery.json");
        const data = await response.json();
        setFilters(data.food);
        setFilteredData(data.delivery);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFilters();
  }, []);

  const handleApplyFilters = () => {
    let updatedFoods = [...filters];

    switch (selectedOption) {
      case "sort":
        if (value === "popularity") {
          updatedFoods.sort((a, b) => (b.rating > a.rating ? 1 : -1));
        } else if (value === "ratinghightolow") {
          updatedFoods.sort((a, b) => b.rating - a.rating);
        }
        break;
      case "cuisines":
        updatedFoods = updatedFoods.filter((food) =>
          value.includes(food.cuisine)
        );
        break;
      case "rating":
        updatedFoods = updatedFoods.filter((food) => food.rating > 4.0);
        break;
      case "cost":
        updatedFoods = updatedFoods.filter((food) => food.cost <= value);
        break;
      default:
        break;
    }

    setFilteredData(updatedFoods.length > 0 ? updatedFoods : filters);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // localStorage.setItem("selectedFilter",selectedOption)
    handleApplyFilters();
    localStorage.setItem("afterFilter",filteredData)

    window.location.reload();
  };

  return (
    <div className="colorbg">
      <div className="container-ay filters-sec">
        <div className="filters-modal">
          <h1>Filtrlər</h1>
          <button className="close-btn" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div>
          <hr />
        </div>
        <div className="filter-div">
          <div className="filter-delivery">
            <div className="filter-options">
              <div
                className={selectedOption === "sort" ? "selected-option" : ""}
              >
                <input
                  type="radio"
                  id="sort"
                  name="options"
                  value="sort"
                  defaultChecked={selectedOption === "sort"}
                  onChange={() => {}}
                  onClick={() => handleFilterOptionClick("sort")}
                />
                <label htmlFor="sort">Sort by</label>
              </div>
              <div
                className={
                  selectedOption === "cuisines" ? "selected-option" : ""
                }
              >
                <input
                  type="radio"
                  id="cuisines"
                  name="options"
                  value="cuisines"
                  defaultChecked={selectedOption === "cuisines"}
                  onChange={() => {}}
                  onClick={() => handleFilterOptionClick("cuisines")}
                />

                <label htmlFor="cuisines">Cuisines</label>
              </div>
              <div
                className={selectedOption === "rating" ? "selected-option" : ""}
              >
                <input
                  type="radio"
                  id="rating"
                  name="options"
                  value="rating"
                  defaultChecked={selectedOption === "rating"}
                  onChange={() => {}}
                  onClick={() => handleFilterOptionClick("rating")}
                />
                <label htmlFor="rating">Reytinq</label>
              </div>
              <div
                className={selectedOption === "cost" ? "selected-option" : ""}
              >
                <input
                  type="radio"
                  id="cost"
                  name="options"
                  value="cost"
                  defaultChecked={selectedOption === "cost"}
                  onChange={() => {}}
                  onClick={() => handleFilterOptionClick("cost")}
                />
                <label htmlFor="cost">Cost per person</label>
              </div>
              <div
                className={selectedOption === "more" ? "selected-option" : ""}
              >
                <input
                  type="radio"
                  id="more"
                  name="options"
                  value="more"
                  defaultChecked={selectedOption === "more"}
                  onChange={() => {}}
                  onClick={() => handleFilterOptionClick("more")}
                />
                <label htmlFor="more">More filters</label>
              </div>
            </div>
            <div className="filter-value-option">
              {selectedOption === "sort" && (
                <div className="filter-value-sort">
                  <label htmlFor="popularity">
                    <input type="radio" id="popularity" value="Popularity" />
                    Popularity
                  </label>
                  <label htmlFor="highToLow">
                    <input
                      type="radio"
                      id="highToLow"
                      value="ratinghightolow"
                    />
                    Rating: High to Low
                  </label>
                  <label htmlFor="deliveryTime">
                    <input type="radio" id="deliveryTime" value="delirytime" />
                    Delivery Time
                  </label>
                  <label htmlFor="lowToHigh">
                    <input type="radio" id="lowToHigh" value="costlowtohigh" />
                    Cost: Low to High
                  </label>
                  <label htmlFor="highToLowCost">
                    <input
                      type="radio"
                      id="highToLowCost"
                      value="costhightolow"
                    />
                    Cost: High to Low
                  </label>
                </div>
              )}
              {selectedOption === "cuisines" && (
                <div
                  className="filter-value-cuisines"
                  style={{ overflowY: "scroll", maxHeight: "430px" }}
                >
                  {cuisineOptions.map((option, index) => (
                    <label key={index}>
                      <input type="checkbox" name="" id="" />
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {selectedOption === "rating" && (
                <div className="filter-value-rating">
                  <p>rating</p>
                  <label htmlFor="" className="range-label-filter">
                    <input
                      type="range"
                      min="3"
                      max="5.0"
                      step="0.5"
                      value={value}
                      onChange={handleChange}
                      list="tickmarks"
                      style={{
                        background: `linear-gradient(to right, red 0%, red calc((${value} - 3) / (5 - 3) * 100%), #ccc calc((${value} - 3) / (5 - 3) * 100%), #ccc 100%)`,
                      }}
                    />
                    <datalist id="tickmarks">
                      <option value="3" label="Any" />
                      <option value="3.5" label="3.5" />
                      <option value="4.0" label="4.0" />
                      <option value="4.5" label="4.5" />
                      <option value="5.0" label="5.0" />
                    </datalist>
                    <div className="range-number">
                      <span className="range-label">Any</span>
                      <span className="range-label">3.5</span>
                      <span className="range-label">4.0</span>
                      <span className="range-label">4.5</span>
                      <span className="range-label">5.0</span>
                    </div>
                  </label>
                </div>
              )}
              {selectedOption === "cost" && (
                <div className="filter-value-cost">
                  <p>Cost</p>
                  <label htmlFor="" className="range-label-filter">
                    <input
                      type="range"
                      min="100"
                      max="1000"
                      step="100"
                      value={value}
                      onChange={handleChange}
                      list="tickmarks"
                      style={{
                        background: `linear-gradient(to right, red 0%, red calc((${value} - 100) / (1000 - 100) * 100%), #ccc calc((${value} - 100) / (1000 - 100) * 100%), #ccc 100%)`,
                      }}
                    />

                    <datalist id="cost-values">
                      <option className="range-label" value="100" label="100" />
                      <option className="range-label" value="200" label="200" />
                      <option className="range-label" value="300" label="300" />
                      <option className="range-label" value="400" label="400" />
                      <option className="range-label" value="500" label="500" />
                      <option className="range-label" value="600" label="600" />
                      <option className="range-label" value="700" label="700" />
                      <option className="range-label" value="800" label="800" />
                      <option className="range-label" value="900" label="900" />
                      <option
                        className="range-label"
                        value="1000"
                        label="1000"
                      />
                    </datalist>
                    <div className="range-number range-number-cost">
                      <span className="range-label">100</span>
                      <span className="range-label">200</span>
                      <span className="range-label">300</span>
                      <span className="range-label">400</span>
                      <span className="range-label">500</span>
                      <span className="range-label">600</span>
                      <span className="range-label">700</span>
                      <span className="range-label">800</span>
                      <span className="range-label">900</span>
                      <span className="range-label">1000</span>
                    </div>
                  </label>
                </div>
              )}

              {selectedOption === "more" && (
                <div className="filter-value-more">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input type="text" placeholder="Search here" />
                </div>
              )}
            </div>
          </div>
          <hr />
          <div className="filters-modal-apply">
            <input type="reset" value="Clear all" />
            <input type="submit" value="Apply" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;