import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default function ReviewDetails(props) {
  return (
    <div className="my-4">
      <h4>#{props.review.name}</h4>
      <ReviewList  />
      <ReviewForm />
    </div>
  );
}