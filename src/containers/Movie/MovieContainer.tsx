import React, { useState } from "react";
import { Movie } from "../../types";
import MovieItem from "../../components/MovieItem/MovieItem.tsx";

interface MovieContainerProps {}

const MovieContainer: React.FC<MovieContainerProps> = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [newMovie, setNewMovie] = useState<string>("");

  const addMovie = () => {
    if (newMovie.trim()) {
      const newEntry: Movie = {
        id: Math.random(),
        title: newMovie,
      };
      setMovies([...movies, newEntry]);
      setNewMovie("");
    }
  };

  const editMovie = (id: number, title: string) => {
    setMovies(
      movies.map((movie) => (movie.id === id ? { ...movie, title } : movie)),
    );
  };

  const deleteMovie = (id: number) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          placeholder="Введите название фильма"
        />
        <button className="btn btn-primary" onClick={addMovie}>
          Добавить
        </button>
      </div>
      <div>
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            onDelete={deleteMovie}
            onEdit={editMovie}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieContainer;
