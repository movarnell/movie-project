import { useState } from "react";
import Star from './Star';

export default function ReviewForm({ movie, addReview }) {
  const [reviewValue, setReviewValue] = useState("");
  const [userValue, setUserValue] = useState("");



  let newDate = new Date().toLocaleDateString('en-us', {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    Hour12: true,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const reviewData = {
      review: reviewValue,
      user: userValue,
      movieId: movie.id,
      date: newDate,
    };
    addReview(reviewData);
    setReviewValue("");
    setUserValue("");
  };

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
