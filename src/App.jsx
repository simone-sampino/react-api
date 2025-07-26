function App() {
  fetch("https://lanciweb.github.io/demo/api/actors/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  fetch("https://lanciweb.github.io/demo/api/actresses/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

export default App;
