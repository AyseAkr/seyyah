import { useRef } from 'react'
import background from './assets/bacxground.webp'
import './Search.css'
import axios from 'axios';
import SearchResultItem from './SearchResultItem';
import { useNavigate } from 'react-router-dom';

type SearchProps = {
  setQuery: (value: string) => any
  setSearchResults: (value: SearchResultItem[]) => any
};

function Search(props: SearchProps) {
  const placeNameInput = useRef<HTMLInputElement>(null);
  const categoryInput = useRef<HTMLSelectElement>(null);
  const navigate = useNavigate();

  const onSubmit = (event: any) => {
    event.preventDefault();
    props.setQuery(placeNameInput.current?.value || '');
    axios.get<SearchResultItem[]>(`http://localhost:8080/locations/search?searchQuery=${placeNameInput.current?.value}&category=${categoryInput.current?.value}`)
    .then(response => {
      props.setSearchResults(response.data);
      navigate('/results');
    })
    .catch((err) => console.log(err));
    }
  
  return (
    <>
      <div className='search'>
       <form onSubmit={onSubmit}>
        <select ref={categoryInput}>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
          <option value="restaurants">Restaurants</option>
        </select>
        in
        <input placeholder='Where' ref={placeNameInput}></input>
        </form>
      </div>
      <img src={background} width="100%" height="auto"/>
    </>
  )
}

export default Search
