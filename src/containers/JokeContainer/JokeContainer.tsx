import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button.tsx";
import Joke from "../../components/Joke/Joke.tsx";

const JokeContainer: React.FC = () => {
  const [joke, setJoke] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="text-center">
      <Joke joke={joke} loading={loading} />
      <Button onClick={fetchJoke} />
    </div>
  );
};

export default JokeContainer;
