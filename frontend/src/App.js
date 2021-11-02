import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//screens
import HomeScreen from './components/screens/homescreen/HomeScreen'
import CartScreen from './components/screens/cartscreen/CartScreen'
import ProductScreen from './components/screens/productscreen/ProductScreen'
//components
import Navebar from './components/navbar/Navbar'
import Backdrop from './components/backDrop/Backdrop'
import SideDrawer from './components/sideDrawer/SideDrawer';
function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <Router>
      <Navebar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
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

    </Router>
  );
}

export default App;
