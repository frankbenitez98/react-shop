import React, {useContext} from 'react';
import '../styles/CardsContainer.css';
import Card from '../components/Card'; 
import useGetProducts from '../hooks/useGetProducts'; 
import ProductDetail from '../components/ProductDetail';
import AppContext from '../context/AppContext';

const api = 'https://api.escuelajs.co/api/v1/products'; 

const CardsContainer = () => {
   const products = useGetProducts(api); 
   const {isOpenDetail} = useContext(AppContext);
 
   return (
      <section className="main-container">
         <div className="cards-container">
            {products.map(product => (
               <Card product={product} key={product.id}/>
            ))}
         </div>
         {isOpenDetail && <ProductDetail/>}
      </section>
   );
}

export default CardsContainer;