import '../styles/global.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../containers/Layout";
import CreateNewPassword from "../pages/CreateNewPassword";
import RecoveryPassword from "../pages/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import CreateAccount from '../pages/CreateAccount';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import MyOrdersContainer from '../pages/MyOrdersContainer';

const App = () => {
   const initialState = useInitialState();
   return (
      <AppContext.Provider value={initialState}>
         <BrowserRouter basename='/react-shop'>
            <Layout>
               <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/my-account" element={<MyAccount />} />
                  <Route exact path="/my-orders" element={<MyOrdersContainer/>} />
                  <Route exact path="/create-account" element={<CreateAccount />} />
                  <Route exact path="/create-new-password" element={<CreateNewPassword />} />
                  <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </Layout>
         </BrowserRouter>
      </AppContext.Provider>
   );
}
export default App; 