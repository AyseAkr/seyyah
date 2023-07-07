import Review from "../Review";
import "../styles/Reviews.css";

type ReviewsProps = {
  reviews: Review[];
};

export default function Reviews(props: ReviewsProps) {
  return (
    <div className="reviews">
      {props.reviews.map((review) => (
        <div className="review" key={review.user}>
          <div className="avatar">
            <img src={review.avatar.small}></img>
          </div>
          <div className="review-content">
            <h4>{review.title}</h4>
            <div className="review-rating">
              Rating: <img src={review.ratingImageUrl}></img> {review.rating}
            </div>
            <p>{review.text}</p>
            <p>Date of stay : {new Date(review.travelDate * 1000).toDateString()}</p>
            <table className="subratings-table">
              <tbody>
                {review.subratings.map((subrating) => (
                  <tr key={review.user + "_" + subrating.localized_name}>
                    <td>
                      <h5 className="subrating-value">{subrating.localized_name}</h5>
                    </td>
                    <td>
                      <img src={subrating.rating_image_url}></img>
                    </td>
                    <td>{subrating.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
