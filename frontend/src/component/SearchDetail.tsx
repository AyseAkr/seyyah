import axios from "axios";
import { useParams } from "react-router-dom";
import LocationDetails from "../LocationDetails";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "../styles/SearchDetail.css";
import ImageResult from "../ImageResult";
import DetailSection from "./DetailSection";
import About from "./About";
import Reviews from "./Reviews";

export default function SearchDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState<LocationDetails>();

  useEffect(() => {
    axios
      .get<LocationDetails>(`http://localhost:8080/locations/${id}`)
      .then((response) => setDetails(response.data));
  }, []);

  const getLargestImage = (image: ImageResult) => {
    return (
      image?.original?.url || image?.large?.url || image?.medium?.url || image?.small?.url || ""
    );
  };

  const getSmallestImage = (image: ImageResult) => {
    return (
      image?.small?.url || image?.medium?.url || image?.large?.url || image?.original?.url || ""
    );
  };

  const images = (details?.photos || []).map((photo) => {
    return {
      original: getLargestImage(photo.images),
      thumbnail: getSmallestImage(photo.images),
      originalTitle: photo.caption,
    };
  });

  return (
    <div>
      {details ? (
        <>
          <h2>{details.name}</h2>
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
            <About details={details}></About>
          </DetailSection>

          {details.reviews.length > 0 && (
            <DetailSection title="Reviews">
              <Reviews reviews={details.reviews}></Reviews>
            </DetailSection>
          )}
        </>
      ) : "Loading..."
    }
    </div>
  );
}
