import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '@styles/MobileMenu.scss'; 

const MobileMenu = () => {
   return (
      <div className="mobile-menu">
         <ul>
            <li>
               <a href="/">CATEGORIES</a>
            </li>
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
               <a href="/">Other</a>
            </li>
         </ul>
         <ul>
            <li>
               <Link to="my-orders">My Orders</Link>
            </li>
            <li>
               <Link to="my-account">My account</Link>
            </li>
         </ul>
         <ul>
            <li>
               <a href="/" className="email">platzi@example.com</a>
            </li>
            <li>
               <a href="/" className="sign-out">Sign out</a>
            </li>
         </ul>
      </div>
   );
}

export default MobileMenu;