import SearchResultItem from "../SearchResultItem";
import '../styles/SearchResultContainer.css'

type SearchResultContainerProps = {
    item: SearchResultItem
};

export default function SearchResultContainer(props: SearchResultContainerProps) {
  return (
    <div className="search-results-data" key={props.item.id}>
      <img alt={props.item.photos[0].caption} src={props.item.photos[0].images.medium.url} />
      <div className="location-address">
        <p><a href={`/location/${props.item.id}`}>{props.item.name}</a></p>
        <p>{props.item.address}</p>
      </div>
    </div>
  );
}
