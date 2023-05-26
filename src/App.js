import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import SharedItems from './SharedItems';

import { useStateValue } from './StateProvider';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe(
  'pk_test_51N2PvaBT4XGJH2fWE9R5v8STa04uLFSvWrumjGOiclVjPSRdrRru8ELMESKFUny3a1m52ru9LOlSSpq1kOa16iRh00XpX8SaTL'
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
    <div>
    <Routes>
      <Route path="/" element={<SharedItems />}>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <>
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
        <Route path="/Checkout" element={<Checkout />} />
        
      </Route>
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
