import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
  // BEM Convention
  <Router>
    <div className="App">
      {/* <h1>Hello</h1> */}
      <Header/>
      <Switch>
        <Route path='/checkout'>
          {/* <Header/> */} {/* Header removed and taken to outside router and switch */}
          <Checkout/>
        </Route>
        <Route path='/'>
          {/* <Header /> */} {/* Header removed and taken to outside router and switch*/}
          <Home />
        </Route>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
