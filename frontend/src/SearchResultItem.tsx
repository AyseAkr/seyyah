import PhotoResult from "./PhotoResult";

type SearchResultItem = {
    id: string;
    address: string;
    name: string;
    photos: PhotoResult[];
  };
  
  export default SearchResultItem;
  