import PhotoResult from "./PhotoResult";

type SearchResult = {
    id: string;
    address: string;
    name: string;
    photos: PhotoResult[];
  };
  
  export default SearchResult;
  