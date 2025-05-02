
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchItem, setSearchItem] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        // console.log(response.data)
        setData(response.data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  // const getProductById = (id) => products.find(p => p.id === parseInt(id));
  const searchProducts = data.filter((item) =>
    item.category.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <ProductContext.Provider value={{ data,searchItem,searchProducts,setSearchItem }}>
      {children}
    </ProductContext.Provider>
  );
};
