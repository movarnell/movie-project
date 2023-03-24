import React from 'react';

export default function Reviews({ reviewList, movieId }) {
  const reviews = reviewList.filter(review => review.movieId === movieId);

  return (
    <div>
        <hr />
      <h4>Reviews:</h4>
      {reviews.length === 0 && <p>No reviews yet.</p>}
      {reviews.map(review => (
        <div key={review.id}>
          <p><span className='smallDate'>{review.date}</span><br/>
          <span className='userName'>{review.user}</span><br/>
          {review.review}</p>
        </div>
      ))}
    </div>
  );
}