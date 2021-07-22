import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Artworks from './Artworks';
import About from './About';
// import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import "./index.css";
import { Helmet } from 'react-helmet';

const App = () =>{
  return(
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>My Portfolio</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>  
      <Route exact path="/about" component={About}/>  
      <Route exact path="/artworks" component={Artworks}/>  
      <Route exact path="/contact" component={Contact}/>
      <Redirect to ="/"/>
      

    </Switch>
    </>    
  );
};
export default App;