import React , {useEffect, useState}from 'react';
import axios from 'axios'; 

const useGetProducts = (api) => {
   
   const [products, setProducts] = useState([]); 
   
   async function fetchData(){
      const response = await axios(api);
      setProducts(response.data); 
   }

   useEffect(()=>{
      fetchData(); 
   }, []); 

   return products; 
};

export default useGetProducts; 