import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button.tsx";
import Joke from "../../components/Joke/Joke.tsx";

const JokeContainer: React.FC = () => {
  const [joke, setJoke] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const url = 'https://api.chucknorris.io/jokes/random';

  const fetchJoke = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error('Error fetching joke:', error);
      setError('Не удалось загрузить шутку. Попробуйте еще раз.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="text-center">
      {loading ? (
        <p>Загрузка шутки...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <Joke joke={joke} />
      )}
      <Button onClick={fetchJoke} />
    </div>
  );
};

export default JokeContainer;