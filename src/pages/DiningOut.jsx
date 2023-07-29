function DiningOut() {
  return (
    <>
      <header className="home">
        <div className="container">
          <div className="homepage">
            <img src="../public/zomato.avif" alt="" />
            <h1>Azərbaycanda ən yaxşı yemək və içkiləri kəşf edin</h1>
            <div className="searchbox">
              <div className="search-city">
                <i className="fa-solid fa-location-dot"></i>
                <input
                  type="text"
                  placeholder="Bakı, 28 may, Sahil, Nərimanov |"
                />
                <i className="fa-solid fa-sort-up"></i>|
              </div>
              <div className="search-restaurant">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Restoran, mətbəx və ya yemək axtarın"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container"></main>
    </>
  );
}

export default DiningOut;
