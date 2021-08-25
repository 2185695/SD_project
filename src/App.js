
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/LoginReg/Register';
import LoginForm from './components/LoginReg/LoginForm';
import LandingPage from './components/Deshboard/LandingPage'
import Cart from './components/cart/Cart';
import OrderHistory from './components/Deshboard/OrderHistory';
import ViewMore from './components/ViewMore/viewMore';
import SubDepartments from './components/ViewMore/subDepartments';
import SearchResults from './components/Deshboard/searchResults';

import { BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact={true}>
              <LandingPage/>
        </Route>

        <Route path="/components/LoginReg/LoginForm" exact={true}>
              <LoginForm />
        </Route>

        <Route path="/components/LoginReg/Register" exact={true}>
              <Register />
        </Route>
        
        <Route path="/components/Deshboard/LandingPage" exact={true}>
              <LandingPage />
        </Route>
    
        <Route path="/Cart" exact={true}>
              <Cart />
        </Route>

        <Route path="/OrderHistory" exact={true}>
              <OrderHistory />
        </Route>

        <Route path="/viewMore" exact={true}>
              <ViewMore />
        </Route>

        <Route path="/subDepartments" exact={true}>
              <SubDepartments />
        </Route>

        <Route path="/searchResults" exact={true}>
              <SearchResults />
        </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default withRouter(App);