import Rating from "./Rating";
import ImageResult from "./ImageResult";
import UserAvatar from "./UserAvatar";

type Review = {
  publishedDate: Date;
  rating: string;
  ratingImageUrl: string;
  text: string;
  title: string;
  travelDate: Date;
  user: string;
  avatar: UserAvatar;
  subratings: Rating[];
};

export default Review;
