import React, {useState, useContext} from 'react';
import '@styles/Header.scss';
import DesktopMenu from '@components/DesktopMenu'; 
import MobileMenu from '@components/MobileMenu'; 
import AppContext from '../context/AppContext';
import  menuIcon from '@icons/icon_menu.svg'; 
import logo from '@logos/ebay_logo.svg'
import shoppingCartIcon from '@icons/icon_shopping_cart.svg' ;
import ShoppingCartContainer from '@containers/ShoppingCartContainer';

const Header = () => {
   const {state} = useContext(AppContext); 

   const [toggleMenuDesk, setToggleMenuDesk] = useState(false); 
   const handleToggleMenuDesk = () => {
      setToggleMenuDesk(!toggleMenuDesk); 
   }; 

   const [toggleMenuMob, setToggleMenuMob] = useState(false); 
   const handleToggleMenuMob = () => {
      setToggleMenuMob(!toggleMenuMob); 
   }; 

   const [toggleCart, setToggleCart] = useState(false); 
   const handleToggleCart = () => {
      setToggleCart(!toggleCart); 
   }; 
   
   
   return (
      <nav>
         <img src={menuIcon} onClick={handleToggleMenuMob} alt="menu" className="menu" />
         <div className="navbar-left">
            <img src={logo} alt="logo" className="logo-nav" />
            <ul>
               <li>
                  <a href="/">All</a>
               </li>
               <li>
                  <a href="/">Clothes</a>
               </li>
               <li>
                  <a href="/">Electronics</a>
               </li>
               <li>
                  <a href="/">Furnitures</a>
               </li>
               <li>
                  <a href="/">Toys</a>
               </li>
               <li>
                  <a href="/">Others</a>
               </li>
            </ul>
         </div>
         <div className="navbar-right">
            <ul>
               <li className="navbar-email" onClick={handleToggleMenuDesk}>
                  frankbenitez98@gmail.com
               </li>
               <li className="navbar-shopping-cart" onClick={handleToggleCart}>
                  <img src={shoppingCartIcon} alt="shopping cart" />
                  {state.cart.length>0  ?  <div>{state.cart.length}</div>: null}
               </li>
            </ul>
         </div>
         {toggleMenuDesk && <DesktopMenu/>}
         {toggleMenuMob && <MobileMenu/>}
         {toggleCart && <ShoppingCartContainer/>}
      </nav>
   );
}

export default Header;