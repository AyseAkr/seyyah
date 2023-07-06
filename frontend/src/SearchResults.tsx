import SearchResultItem from './SearchResultItem';
import './SearchResults.css'
type SearchResultsProps = {
  query: string
  results: SearchResultItem[];
};

export default function SearchResults(props : SearchResultsProps) {
  return (
    <div className='search-results'> 
      <h3>Top results matching for {props.query}</h3>
      {props.results.map(searchResult => (
        <div className='search-results-data' key={searchResult.id}>
          <img alt={searchResult.photos[0].caption} src={searchResult.photos[0].images.medium.url} />
          <div className='location-address'>
          <p><a href={`/location/${searchResult.id}`}>{searchResult.name}</a></p>
          <p>{searchResult.address}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
