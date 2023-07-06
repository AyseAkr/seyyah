import PhotoResult from './PhotoResult';
import Rating from './Rating'

type SearchDetails = {
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
};

export default SearchDetails;