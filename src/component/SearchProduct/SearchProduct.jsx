import React, { useEffect, useState } from 'react';
import SearchList from '../SearchList/SearchList';
import SearchBar from '../SearchBar/SearchBar';

const SearchProduct = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [query, setQuery] = useState('');
  
    useEffect(() => {
      // Fetch products from API
      const fetchProducts = async () => {
        try {
          const response = await fetch('https://personal-project-server-mu.vercel.app/details'); // Replace with your API endpoint
          const data = await response.json();
          setProducts(data);
       
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);
  
    useEffect(() => {
      // Filter products based on search query
      if (query) {
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts([]);
      }
    }, [query, products]);
  
  
    const handleSearch = (searchQuery) => {
      setQuery(searchQuery);
    };
  
    return (
      <div>
        
        <SearchBar onSearch={handleSearch} products={products} />
       { query && <SearchList products={filteredProducts} query={query} />}
      </div>
    );
  };


export default SearchProduct;