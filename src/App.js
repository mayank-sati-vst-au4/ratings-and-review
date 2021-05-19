import React, { useEffect }from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {useLocation, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import Payment from './Payment'
import { auth } from './firebase';
import { useStateValue} from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { Flipper, Flipped} from 'react-flip-toolkit';

const promise = loadStripe(
 "pk_test_51Iqep6SIaGiN0jalnEA9NAlQeHI3DpEYQaylqLY2P9wXSOPm1ZLd6vnVdDOdaxpHywATltIQwoLEZ5z327tFb9kP00nzTp4VBk"
);

function App() {

  // const location = useLocation();
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('The user is ', authUser);

      if(authUser) {
        // The user is logged in / the user was logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        
      } else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
  // BEM Convention
  //<Flipper flipKey={location.pathname}>
  <Router>
    <div className="App">
      {/* <h1>Hello</h1> */}
      
      <Switch>
        <Route path = "/login">
          <Login />
        </Route>

        <Route path='/checkout'>
          {/* <Header/> */} {/* Header removed and taken to outside router and switch */}
          <Header/>
          <Checkout/>
        </Route>
        <Route path = "/payment">
          <Header/>
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path='/'>
          {/* <Header /> */} {/* Header removed and taken to outside router and switch*/}
          <Header/>
          <Home />
        </Route>
        </Switch>
    </div>
  </Router>
  //</Flipper>
  );
}

export default App;
