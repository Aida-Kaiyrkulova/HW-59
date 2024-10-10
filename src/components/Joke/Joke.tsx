import React from "react";

interface JokeProps {
  joke: string | null;
}

const Joke: React.FC<JokeProps> = ({ joke }) => {
  return (
    <div className="card text-center mb-3">
      <div className="card-body">
        <p className="card-text">{joke}</p>
      </div>
    </div>
  );
};

export default Joke;