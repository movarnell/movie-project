import ReviewDetails from './ReviewDetails';

// Define the ReviewList component.
export default function ReviewList(props) {

  // Return a list of ReviewDetails components.
  return (
    <>
      {props.reviewList.map((review) => (
        <ReviewDetails
          key={review.id}
          date={review.date}
          review={review}
        />
      ))}
    </>
  );
}

// This component renders a list of ReviewDetails components.
// The ReviewDetails component displays information about a specific review.