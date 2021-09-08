import logo from './logo.svg';
import './App.css';

import Header from "./Components/Header";
import Home from "./Components/Home";
import Discover from "./Components/Discover";
// import Footer from "./Components/Footer";

import {Provider} from 'react-redux'
import store from './Components/store'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <> 
    <Router>
      <Header /> 
      <Switch>
        <Route exact path="/index">
          <Home />
        </Route>
        <Provider store={store}>
          <Route exact path="/discover">
            <Discover />
          </Route>
        </Provider>
      </Switch>
    </Router>
    </>
  );
}

export default App;
