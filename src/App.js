import "./App.css";
import Row from "./Row";
import requests from "./Request";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      {/* Banner */}
      <Banner />
      {/* Row Section */}
      <Row
        title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOrignals}
        isLargeRow={true}
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default App;
