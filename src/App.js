import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import Register from './Register/Register.js';
import ResetPassword from './ResetPassword/ResetPassword.js';
import NewPass from './ResetPass-NewPass/NewPass.js';
import Login from './Login/Login.js';
import SuccessEmail from './SuccesEmail/SuccesEmail.js';
import Invoice from './Invoice/Invoice'
import DetailInvoice from './DetailInvoice/DetailInvoice'
import ListMenuKelas from './ListMenuKelas/ListMenuKelas.js';
import MyClass from './MyClass/MyClass.js'
import SuccesPurchase from './SuccesPurchase/SuccesPurchase.js';
import axios, { Axios } from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import DetailKelas from './DetailKelas/DetailKelas';
import Checkout from './Checkout/Checkout';

export const CartContext = createContext()
function App() {
  const [cart, setCart] = useState([])
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/home" element={<LandingPage></LandingPage>}></Route>
          <Route path="/myclass" element={<MyClass></MyClass>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/successemail" element={<SuccessEmail></SuccessEmail>}></Route>
          <Route path="/resetpassword/newpass" element={<NewPass></NewPass>}></Route>
          <Route path="/resetpassword" element={<ResetPassword></ResetPassword>}></Route>
          <Route path="/kelas/:category" element={<ListMenuKelas></ListMenuKelas>}></Route>
          <Route path="/:category/:id" element={<DetailKelas cart={cart} setCart={setCart}></DetailKelas>}></Route>
          <Route path="/checkout" element={
            <CartContext.Provider value={cart}>
              <Checkout></Checkout>
            </CartContext.Provider>}>
          </Route>
          <Route path="/paymentmethod"></Route>
          <Route path="/checkout/succespurchase" element={<SuccesPurchase></SuccesPurchase>}></Route>
          <Route path="/invoice" element={<Invoice></Invoice>}></Route>
          <Route path="/invoice/detail/:id" element={<DetailInvoice></DetailInvoice>}></Route>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
