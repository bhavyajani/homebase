import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Products, Navbar, Homepage, Loginpage, AboutUs, ContactUs, Footer} from './components'
//import Route from 'react-router-dom/Route';
const App = () => {
  return  (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/products" exact component={Products}/> 
          <Route path="/login" exact component={Loginpage}/>
          <Route path="/about_us" exact component={AboutUs}/>
          <Route path="/contact_us" exact component={ContactUs}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;