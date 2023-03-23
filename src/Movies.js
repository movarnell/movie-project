import React from 'react';
import MovieArray from './MovieArray';
import ReviewForm from './ReviewForm';



export default function Movies() {

  const movieCards = MovieArray.map(movie => (
    <div className="col-lg-3 col-md-6 col-sm-12 p-4" key={movie.id}>
      <div className="card shadow">
        <img src={movie.posterURL} alt={movie.title} />
        <div className="card-body h-100">
          <ul className="list-unstyled">
            <li><h3 className="text-center">{movie.title}</h3></li>
            <li className="fw-bold text-center">Released: {movie.releaseDate}</li>
            <li className="lead">{movie.overview}</li>
            <li className="fw-bolder lead">Average Rating: {movie.rating}</li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="row p-4">
      {movieCards}

    </div>
  );
}