import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieContainer from "./containers/MovieContainer/MovieContainer.tsx";
import JokeContainer from "./containers/JokeContainer/JokeContainer.tsx";

const App: React.FC = () => {
  const [currentApp, setCurrentApp] = useState<"movies" | "jokes">("movies");

  const switchToMovies = () => setCurrentApp("movies");
  const switchToJokes = () => setCurrentApp("jokes");

  return (
    <div className="container mt-4">
      <div className="text-center mb-3">
        <button className="btn btn-primary me-2" onClick={switchToMovies}>
          Фильмы
        </button>
        <button className="btn btn-success" onClick={switchToJokes}>
          Шутки
        </button>
      </div>
      {currentApp === "movies" ? <MovieContainer /> : <JokeContainer />}
    </div>
  );
};

export default App;
