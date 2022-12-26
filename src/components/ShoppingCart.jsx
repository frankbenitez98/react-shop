import React, {useContext} from 'react';
import '@styles/ShoppingCart.scss';
import closeIcon from '@icons/icon_close.png'; 
import AppContext from '../context/AppContext';

const ShoppingCart = ({product, indexValue}) => {
   const {removeFromCart} = useContext(AppContext); 
   return (
      <>
         <div className="shopping-cart">    
            <figure>
               <img src={product.images[0]} alt="bike" />
            </figure>
            <p>{product.title}</p>
            <p>${product.price},00</p>
            <img src={closeIcon} onClick={() => removeFromCart(indexValue)} alt='delete' />
         </div>
      </>


   );
}

export default ShoppingCart;