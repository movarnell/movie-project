import ReviewDetails from "./ReviewDetails";

export default function ReviewList(props) {
  if (props.reviewList.length === 0) {
    return <p className="text-muted">No Reviews Posted --BE THE FIRST</p>;
  }

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