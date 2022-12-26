import React, {useContext, useState} from 'react'

const initialState = { 
   cart: []
};

const useInitialState = () => {
   const [state, setState] = useState(initialState); 
   const [isOpenDetail , setIsOpenDetail] = useState(null); 
   const openDetail = (item) =>{
      setIsOpenDetail(item); 
   };
   const closeDetail = () =>{
      setIsOpenDetail(null); 
   };
   const addToCart = (payload) => { 
      setState({
         ...state,
         cart: [...state.cart, payload]
      });
   }; 

   const removeFromCart = (indexValue) => {
      setState({
         ...state, 
         cart: state.cart.filter(( _ ,  index) => index !== indexValue)
      })
   };

   return{
      state,
      isOpenDetail, 
      openDetail,
      closeDetail, 
      addToCart,
      removeFromCart
   }

};

export default useInitialState; 

