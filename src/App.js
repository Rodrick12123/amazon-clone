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
        <Route path="/Register"
          element={
            <>
            <Register/>
            </>}
        />


      </Routes>
    </div>
    </Router>
  );
}

export default App;
