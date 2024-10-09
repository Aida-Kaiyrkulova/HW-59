import React from "react";

interface JokeProps {
  joke: string | null;
  loading: boolean;
}

const Joke: React.FC<JokeProps> = ({ joke, loading }) => {
  return (
    <div className="card text-center mb-3">
      <div className="card-body">
        {loading ? (
          <p className="card-text">Загрузка шутки...</p>
        ) : (
          <p className="card-text">{joke}</p>
        )}
      </div>
    </div>
  );
};

export default Joke;
