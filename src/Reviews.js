import React from 'react';

// Define a functional component called "Reviews" that takes two props: "reviewList" (an array of review objects) and "movieId" (the ID of the movie being reviewed)
export default function Reviews({ reviewList, movieId }) {
  // Filter the list of reviews to only include those with a movieId that matches the one passed in as a prop
  const reviews = reviewList.filter(review => review.movieId === movieId);

  // Return a div containing a horizontal line, a heading "Reviews:", and a list of reviews
  return (
    <div>
      <hr />
      <h4>Reviews:</h4>

      {/* If there are no reviews, display a message saying "No reviews yet. Be the First!" */}
      {reviews.length === 0 && <p>No reviews yet. Be the First!</p>}

      {/* Otherwise, map over the reviews and display each one */}
      {reviews.map(review => (
        // Each review is displayed within a div with a unique key (the review's ID)
        <div key={review.id}>
          {/* Display the date the review was posted */}
          <p><span className='smallDate'>{review.date}</span><br />

            {/* Display the name of the user who posted the review */}
            <span className='userName'>{review.user}</span><br />

            {/* Display the text of the review */}
            {review.review}</p>
        </div>
      ))}
    </div>
  );
}
