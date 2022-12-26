import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '@styles/DesktopMenu.scss'; 

const DesktopMenu = () => {
   return (
      <div className="desktop-menu">
         <ul>
            <li>
            <Link to="my-orders">My Orders</Link>
            </li>
            <li>
               <Link to="my-account">My account</Link>
            </li>
            <li>
               <a href="/">Sign out</a>
            </li>
         </ul>
      </div>
   );
}

export default DesktopMenu;