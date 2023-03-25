import { useState } from "react";

import Star from './Star';

export default function ReviewForm({ movie, addReview }) {
  // set up state hooks for the review and user input values
  const [reviewValue, setReviewValue] = useState("");
  const [userValue, setUserValue] = useState("");

  // set up a new date object to be included in the review data
  let newDate = new Date().toLocaleDateString('en-us', {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    Hour12: true,
  });

  // handle the form submission event
  const handleSubmit = (event) => {
    event.preventDefault();
    // create a new review data object with the current review and user values, movie id, and date
    const reviewData = {
      review: reviewValue,
      user: userValue,
      movieId: movie.id,
      date: newDate,
    };
    // call the addReview function passed down from the parent component and pass in the review data object
    addReview(reviewData);
    // reset the review and user input values to empty strings
    setReviewValue("");
    setUserValue("");
  };

  // render the form component with input fields for the user's name and review, as well as a Star component and a submit button
  return (
    <form onSubmit={handleSubmit}>
      <Star />
      <label htmlFor="user-input" className="form-label">
        What's Your Name?
      </label>
      <input
        type="text"
        id="user-input"
        className="form-control"
        value={userValue}
        onChange={(e) => setUserValue(e.target.value)}
      />
      <label htmlFor="review-input" className="form-label">
        Share Your Review
      </label>
      <input
        type="text"
        id="review-input"
        className="form-control"
        value={reviewValue}
        onChange={(e) => setReviewValue(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );
}