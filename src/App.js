import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Headline from './Headline';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import LoginPassword from "./LoginPassword";
import Register from "./Register";
import {auth} from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Method from "./Method";
import Order from "./Order";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KjVuKHWQld6JE3RJLhBrKXIeOJs6Dpk2RvxYexiYFha141BxBkdoghheRJ6ok1NSWQ0EqJqSH8TPExsSWcUW0hR00RxWDmAZV"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //only runs once app renders
    auth.onAuthStateChanged(authUser => {
      console.log('Current user', authUser);

      if(authUser){
        dispatch({
          type: 'set_user',
          user: authUser,
        })
      }else{
        dispatch({
          type: 'set_user',
          user: null,
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
    <div className="App">
      
      <Routes>
        {/* consider exact path */}
        <Route path="/checkout" 
          element={
            <>
              <Header />
              <Headline/>
              <Checkout />
            </>}
        />
        <Route path="/" 
          element={
            <>
              <Header />
              <Headline/>
              <Home/>
            </>}
        />
        <Route path="/payment"
          element={
            <>
              <Elements stripe= {promise}>
                <Payment/>
              </Elements>
            </>}
        />
        <Route path="/Login"
          element={
            <>
            <Login/>
            </>}
        />
        <Route path="/LoginPassword"
          element={
            <>
            <LoginPassword/>
            </>}
        />
        <Route path="/Order"
          element={
            <>
            <Order/>
            </>}
        />
        <Route path="/Register"
          element={
            <>
            <Register/>
            </>}
        />
        <Route path="/method"
          element={
            <>
            <Elements stripe= {promise}>
              <Method/>
            </Elements>
            </>}
        />

      </Routes>
    </div>
    </Router>
  );
}

export default App;
