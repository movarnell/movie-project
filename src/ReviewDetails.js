import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

// this will display the details of the reviews that have been posted, and then show the Form.
export default function ReviewDetails(props) {
  return (
    <div className="my-4">
      <ReviewList />
      <ReviewForm />
    </div>
  );
}