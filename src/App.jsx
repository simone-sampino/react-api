import { useState, useEffect } from "react";

function App() {
  const [actorsData, setActorsData] = useState([]);
  const [actressesData, setActressesData] = useState([]);

  useEffect(() => {
    fetch("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => res.json())
      .then((data) => {
        setActorsData(data);
        // console.log(data);
      });

    fetch("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => res.json())
      .then((data) => {
        setActressesData(data);
        // console.log(data);
      });
  }, []);

  return (
    <>
      <header className="bg-black py-5">
        <h1 className="text-center text-white">VIPs</h1>
      </header>

      <main className="bg-dark">
        <div className="container py-5">
          <h2 className="text-white mb-3">Actors:</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3">
            {/* Actors */}
            {actorsData.map((vip) => {
              return (
                <div key={vip.id} className="col">
                  <div className="card d-flex align-items-center shadow h-100">
                    <img
                      className="card-img-top max-width"
                      src={vip.image}
                      alt={vip.name}
                    ></img>
                    <div className="card-body p-3">
                      <h3 className="card-title">{vip.name}</h3>
                      <div className="card-text">
                        {vip.birth_year} - {vip.death_year}
                      </div>
                      <div className="card-text">
                        <span className="fw-bold">Nationality</span>:{" "}
                        {/* prettier mi mette {" "} in automatico quando salvo */}
                        {vip.nationality}
                      </div>
                      <div className="card-text">
                        <span className="fw-bold">Biography</span>:{" "}
                        {vip.biography}
                      </div>
                      <div className="card-text">
                        <span className="fw-bold">Known for</span>:{" "}
                        {vip.known_for.join(", ")}
                      </div>
                      <div className="card-text">
                        <span className="fw-bold">Awards</span>:{" "}
                        {vip.awards.join(", ")}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="text-white my-3">Actresses:</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3">
            {/* Actresses */}
            {actressesData.map((vip) => {
              return (
                <div key={vip.id} className="col">
                  <div className="card d-flex align-items-center shadow h-100">
                    <img
                      className="card-img-top max-width"
                      src={vip.image}
                      alt={vip.name}
                    ></img>
                    <div className="card-body p-3">
                      <h3 className="card-title">{vip.name}</h3>
                      <div className="card-text">
                        {vip.birth_year} - {vip.death_year}
                      </div>
                      <div className="card-text">
                        <span className="fw-bold">Nationality</span>:{" "}
                        {/* prettier mi mette {" "} in automatico quando salvo */}
                        {vip.nationality}
                      </div>
                      <div className="card-text">
                        <span className="fw-bold">Biography</span>:{" "}
                        {vip.biography}
                      </div>
                      <div className="card-text">
                        <span className="fw-bold">Known for</span>:{" "}
                        {vip.most_famous_movies.join(", ")}
                      </div>
                      <div className="card-text">
                        <span className="fw-bold">Awards</span>: {vip.awards}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
