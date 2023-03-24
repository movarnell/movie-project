import { useState } from "react";



export default function ReviewForm({ movie, addReview }) {
  const [reviewValue, setReviewValue] = useState("");

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const reviewData = { 
      review: reviewValue, 
      movieId:movie.id
    }
    addReview(reviewData);
    setReviewValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button className="btn btn-primary mt-2" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
