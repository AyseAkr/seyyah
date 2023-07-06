import { useNavigate } from 'react-router-dom';
import SearchResultItem from '../SearchResultItem';
import { useEffect } from 'react';
import SearchResultContainer from './SearchResultContainer';

type SearchResultsProps = {
  query: string
  results: SearchResultItem[];
};

export default function SearchResults(props : SearchResultsProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.query) {
      navigate('/');
    }
  }, []);

  return (
    <div className='search-results'>
      <h3>Top results matching for  "{props.query}"</h3>
      {props.results.map(item => <SearchResultContainer item={item} />)}
    </div>
  )
}
