import { useState } from 'react';
import React from 'react';
import MovieArray from './MovieArray';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

let nextReviewID = 2;

export default function Movies() {
  // activates the useState for the Review List
  const [reviewList, setReviewList] = useState([]);
  const addReview = (newReviewData) => {
    const newReview = {
      id: nextReviewID++,
      ...newReviewData,
      
    };
    setReviewList(reviewList.concat(newReview));
  };

// Maps out the MovieArray for each card
  const movieCards = MovieArray.map(movie => (
    <div className="col cardContainer pb-5 " key={movie.id}>
      <div className="card shadow cardWidth">
        <img src={movie.posterURL} alt={movie.title} />
        <div className="card-body  h-100">
          <ul className="list-unstyled">
            <li><h3 className="text-center">{movie.title}</h3></li>
            <li className="fw-bold text-center">Released: {movie.releaseDate}</li>
            <li className="lead">{movie.overview}</li>
            <li className="fw-bolder lead">Average Rating: {movie.rating}</li>
          </ul>
          <hr />
          {/* Adds the review form component and assigns it to the movie it is on */}
          <ReviewForm movie={movie} addReview={addReview}/>
          {/* renders the review list in its current state for each movie as the map works through them */}
          <Reviews reviewList={reviewList} movieId={movie.id} />
        </div>
      </div>
    </div>
  ));

  // Returns the div with the card containing the movie and the row for each movie. 
  return (
    <div className="row p-4">
      {movieCards}

    </div>
  );
}