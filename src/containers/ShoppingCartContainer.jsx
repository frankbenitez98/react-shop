import React, {useContext} from 'react';
import '@styles/ShoppingCartContainer.scss'; 
import flechita from '@icons/flechita.svg';
import ShoppingCart from '../components/ShoppingCart';
import AppContext from '../context/AppContext';

const ShoppingCartContainer = () => {
   const {state} = useContext(AppContext); 
   var total = 0; 
   return (
      <aside className="product-detail-shopping">
         <div className="title-container">
            <img src={flechita} alt="arrow" />
            <p className="title">My order</p>
         </div>
         <div className="my-order-content">

            {state.cart.map((product, index)=> {
               total += product.price; 
               return (<ShoppingCart product={product} key={index} indexValue= {index}/>);
            })}

            <div className="order">
               <p>
                  <span>Total</span>
               </p>
               <p>${total}.00</p>
            </div>

            <button className="primary-button">
               Checkout
            </button>
         </div>
      </aside>

   );
}

export default ShoppingCartContainer;