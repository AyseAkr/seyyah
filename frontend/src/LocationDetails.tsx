import PhotoResult from './PhotoResult';
import Rating from './Rating'
import Review from './Review';

type LocationDetails = {
    locationId: string
    name: string
    description: string
    address: string
    latitude: string
    longitude: string
    rating: string
    ratingImage: string
    photos: PhotoResult[]
    subratings: Rating[]
    reviews: Review[]
};

export default LocationDetails;