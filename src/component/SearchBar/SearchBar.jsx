import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import {   useNavigate } from 'react-router-dom';

const SearchBar = ({onSearch, products}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      const filteredSuggestions = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query, products]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    
  };

  const handleSearch = () => {
    onSearch(query);
    navigate(`${query}` , {replace: true});
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSuggestionClick = (product) => {
    setQuery(product.name);
    setSuggestions([]);
    navigate(`/details/${product._id}` , {replace: true});
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
      className='rounded-lg p-3'
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button className=' btn btn-ghost  btn-outline right-0 absolute z-1' onClick={handleSearch}><BiSearch className='text-2xl' /></button>
      {suggestions.length > 0 && (
        <ul style={{ border: '1px solid #ccc',  position: 'absolute', width: '100%', backgroundColor: 'white', zIndex: 1 }}>
          {suggestions.map((product) => (
            <li
              key={product.id}
              style={{ padding: '8px', cursor: 'pointer' }}
              onClick={() => handleSuggestionClick(product)}
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;