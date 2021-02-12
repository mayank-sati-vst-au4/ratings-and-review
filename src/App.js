import './App.css';
import Header from './Header';
import Home from './Home'

function App() {
  return (
  // BEM Convention
    <div className="App">
      {/* <h1>Hello</h1> */}
          <Header />
          <Home />
    </div>
  );
}

export default App;
