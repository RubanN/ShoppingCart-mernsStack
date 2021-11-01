import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      {/*Navebar*/}
      {/*Sidedrawer*/}
      {/*Backdrop*/}
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>

      {/*HomeScreen*/}
      {/*ProductScreen*/}
      {/*CartScreen*/}
      <h1>Hello</h1>
    </Router>
  );
}

export default App;
