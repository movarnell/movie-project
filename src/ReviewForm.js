import { useState } from "react";


let nextReviewID = 2;

export default function ReviewForm() {
  const [reviewValue, setReviewValue] = useState("");
  const [reviewList, setReviewList] = useState([]);

  const addReview = (newReviewData) => {
    const newReview = {
      id: nextReviewID++,
      ...newReviewData
    };
    setReviewList(reviewList.concat(newReview));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    addReview({ 
        key: nextReviewID,
        review: reviewValue });
    setReviewValue("");
  };

  return (
    <form>
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
