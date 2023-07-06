import logo from './assets/logo.png'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Search from './Search';
import SearchResults from './SearchResults';
import SearchDetail from './SearchDetail';
import SearchResult from './SearchResult';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  return (
    <>
      <div className='header-logo'>
        <h1>Welcome to the </h1><img src={logo} />
      </div>
      <Routes>
        <Route path="/" element={<Search setQuery={setQuery} setSearchResults={setSearchResults}/>}></Route>
        <Route path="/results" element={<SearchResults query={query} results={searchResults} />}></Route>
        <Route path="/location/:id" element={<SearchDetail/>}></Route>
      </Routes>
    </>
  )
}

export default App
