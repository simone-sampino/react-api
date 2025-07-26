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
      <header>
        <h1 className="text-center">VIPs</h1>
      </header>

      <main>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-3">
            {actorsData.map((vip) => {
              return (
                <div key={vip.id} className="col">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={vip.image}
                      alt={vip.name}
                    ></img>
                    <div className="card-body">{vip.name}</div>
                    <div className="card-text">{vip.nationality}</div>
                    <div className="card-text">{vip.biography}</div>
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
