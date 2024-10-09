import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieContainer from './containers/Movie/MovieContainer.tsx';

const App: React.FC = () => {
  return (
    <div className="container mt-4">
      <MovieContainer />
    </div>
  );
};

export default App;
