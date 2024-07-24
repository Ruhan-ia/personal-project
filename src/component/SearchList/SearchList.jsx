import React from 'react';
const highlightText = (text, highlight) => {
    if (!highlight) return text;
  
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className='bg-gray-400'>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

const SearchList = ({products, query }) => {
   
    return (
        <div>
           
            <ul>
        {products.map((product) => (
          <li key={product.id}>
            {highlightText(product.name, query)}
          </li>
        ))}
      </ul>
            
       
      </div>
    );
};

export default SearchList;