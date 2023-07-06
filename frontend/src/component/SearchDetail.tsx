import axios from "axios";
import { useParams } from "react-router-dom";
import LocationDetails from "../LocationDetails";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "../styles/SearchDetail.css";
import ImageResult from "../ImageResult";
import DetailSection from "./DetailSection";
import About from "./About";

export default function SearchDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState<LocationDetails>();

  useEffect(() => {
    axios
      .get<LocationDetails>(`http://localhost:8080/locations/${id}`)
      .then((response) => setDetails(response.data));
  }, []);

  const getLargestImage = (image: ImageResult) => {
    return image?.original?.url || image?.large?.url || image?.medium?.url || image?.small?.url || "";
  };

  const getSmallestImage = (image: ImageResult) => {
    return image?.small?.url || image?.medium?.url || image?.large?.url || image?.original?.url || "";
  };

  const images = (details?.photos || []).map((photo) => {
    return {
      original: getLargestImage(photo.images),
      thumbnail: getSmallestImage(photo.images),
      originalTitle: photo.caption,
    };
  });
  return (
    <>
      <h2>{details?.name}</h2>
      <div className="images">
        <ImageGallery
          lazyLoad={true}
          thumbnailPosition={"right"}
          items={images}
          useBrowserFullscreen={false}
          showBullets={true}
          autoPlay={true}
        ></ImageGallery>
      </div>
      <DetailSection title="About">
        {details && <About details={details}></About>}
      </DetailSection>

      <DetailSection title="Reviews">
        <div className="reviews">
          {details?.reviews.map((review) => (
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
      </DetailSection>
    </>
  );
}
