import React, {useContext} from 'react';
import '@styles/ProductDetail.scss'; 
import AppContext from '../context/AppContext';
import addCard from '@icons/bt_add_to_cart.svg'; 
import closeIcon from '@icons/icon_close.png'; 

const ProductDetail = () => {
   const {closeDetail, isOpenDetail, addToCart} = useContext(AppContext);
   const handleAddToCart = () => {
      addToCart(isOpenDetail);
      closeDetail(); 
   };

   return (
      <aside className="product-detail">
         <div className="product-detail-close" onClick={() => closeDetail()}>
            <img src={closeIcon} alt="close" />
         </div>
         <img src={isOpenDetail.images[0]} alt={isOpenDetail.title} />
         <div className="product-info-detail">
            <p>${isOpenDetail.price},00</p>
            <p>{isOpenDetail.title}</p>
            <p>{isOpenDetail.description}</p>
            <button className="primary-button-detail add-to-cart-button" onClick={handleAddToCart}>
               <img src={addCard} alt="add to cart"  />
               Add to cart
            </button>
         </div>
      </aside>
   );
}

export default ProductDetail;