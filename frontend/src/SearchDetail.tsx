import axios from "axios";
import { useParams } from "react-router-dom";
import LocationDetails from "./LocationDetails";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "./SearchDetail.css";

export default function SearchDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState<LocationDetails>();
  useEffect(() => {
    axios
      .get<LocationDetails>(`http://localhost:8080/locations/${id}`)
      .then((response) => setDetails(response.data));
  }, []);

  const images = (details?.photos || []).map((photo) => {
    return {
      original: photo.images.original.url,
      thumbnail: photo.images.medium.url,
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
      <div className="info">
        <h3 className="about">About</h3>
        <div className="info-columns">
          <div className="ratings">
            <h3>{details?.rating}</h3>
            <img src={details?.ratingImage}></img>
            <table className="subratings-table">
              <tbody>
                {details?.subratings.map((subrating) => (
                  <tr key={'rating_' + subrating.localized_name}>
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
          <div className="description">
            {details?.description}
            <p>
              Address:{" "}
              <a
                href={`https://maps.google.com/?q=${details?.name} ${details?.address}`}
                target="_blank"
              >
                {details?.address}
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="info">
        <h3 className="about">Reviews</h3>
        <div className="reviews">
          {details?.reviews.map((review) => (
            <div className="review" key={review.user}>
              <div className="avatar">
                <img src={review.avatar.small}></img>
              </div>
              <div className="review-content">
                <h4>{review.title}</h4>
                <div className="review-rating">
                  Rating:{" "}<img src={review.ratingImageUrl}></img>{" "}{review.rating}
                </div>
                <p>{review.text}</p>
                <p>Date of stay : {new Date(review.travelDate * 1000).toDateString()}</p>
                <table className="subratings-table">
                  <tbody>
                    {review.subratings.map((subrating) => (
                      <tr key={review.user + '_' + subrating.localized_name}>
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
      </div>
    </>
  );
}
