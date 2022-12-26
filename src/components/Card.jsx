import React, {useContext} from 'react';
import '@styles/Card.scss';
import addCart from '@icons/bt_add_to_cart.svg'; 
import AppContext from '../context/AppContext';

const Card = ({product}) => {

   const {addToCart, openDetail} = useContext(AppContext); 

   const handleAddToCart = (item) =>{ 
      addToCart(item);
   }

   return (
      <div className="product-card">
         <img src={product.images[0]} alt={product.title} onClick={()=>openDetail(product)} />
         <div className="product-info">
            <div>
               <p>${product.price},00</p>
               <p>{product.title}</p>
            </div>
            <figure onClick={ () => handleAddToCart(product)}>
               <img src={addCart} alt="" />
            </figure>
         </div>
      </div>
   );
}

export default Card;