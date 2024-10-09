import React, { useState } from "react";
import { Movie } from "../../types";

interface MovieItemProps {
  movie: Movie;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

const MovieItem: React.FC<MovieItemProps> = React.memo(
  ({ movie, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editingMovieTitle, setEditingMovieTitle] = useState(movie.title);

    const handleEditClick = () => {
      setIsEditing(true);
    };

    const handleSaveClick = () => {
      if (editingMovieTitle.trim()) {
        onEdit(movie.id, editingMovieTitle);
        setIsEditing(false);
      }
    };

    return (
      <div className="card mb-3">
        <div className="card-body d-sm-flex align-items-center justify-content-between">
          {isEditing ? (
            <>
              <input
                type="text"
                className="form-control mb-2"
                value={editingMovieTitle}
                onChange={(e) => setEditingMovieTitle(e.target.value)}
                autoFocus
              />
              <button className="btn btn-success" onClick={handleSaveClick}>
                Сохранить
              </button>
            </>
          ) : (
            <>
              <h5 className="card-title" onClick={handleEditClick}>
                {movie.title}
              </h5>
              <button
                className="btn btn-danger ms-2"
                onClick={() => onDelete(movie.id)}
              >
                Удалить
              </button>
            </>
          )}
        </div>
      </div>
    );
  },
);

export default MovieItem;
