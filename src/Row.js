import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

//image base url
const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              className={`row_poster ${isLargeRow && "row__posterLarge"}`}
              key={movie.id}
              src={`${baseUrl}${
                isLargeRow ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie.name}
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
