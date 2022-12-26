import React, {useContext} from 'react'; 
import '../styles/MyOrdersContainer.scss';
import AppContext from '../context/AppContext';
import ShoppingCart from '../components/ShoppingCart';

const MyOrdersContainer = () => {
   const {state} = useContext(AppContext); 
   return (
      <div className="my-order">
      <div className="my-order-container">
         <h1 className="title">My orders</h1>
         <div className="my-order-content">
            {state.cart.map((product, index)=> 
               (<ShoppingCart product={product} key={index} indexValue= {index}/>)
            )}
            {(state.cart.length)===0 && <p className="my-order-text">No tienes ninguna orden aun...</p>}
         </div>
         </div>
      </div>
   );
}

export default MyOrdersContainer;