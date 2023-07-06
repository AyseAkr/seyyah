import axios from "axios";
import { useParams } from "react-router-dom";
import SearchDetails from "./SearchDetails";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "./SearchDetail.css";

export default function SearchDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState<SearchDetails>();
  useEffect(() => {
    axios
      .get<SearchDetails>(`http://localhost:8080/locations/${id}`)
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
        <p>{details?.description}</p>
        <p>address: {details?.address}</p>
        <div>
          <h3>{details?.rating}</h3>
          <img src={details?.ratingImage}></img>
          {details?.subratings.map((subrating) => (
            <div>
              <h5>
                {subrating.localized_name} : {subrating.value}
              </h5>
              <img src={subrating.rating_image_url}></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
