import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import 'bootstrap';
import 'popper.js';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './views/pages/Home';
import About from './views/pages/About';
import Custom from './views/pages/Custom';
import Contact from './views/pages/Contact';
import FirstTimer from './views/layout/FirstTimer';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
        firsttime : false,
        pages: [
          'portofolio',
          'news'
        ]
    }
  }
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={()=> <Home firstTime={this.state.firsttime} /> } />
          <Route path="/home" component={()=> <Home firstTime={this.state.firsttime} /> } />
          <Route path="/about-us" component={()=> <About firstTime={this.state.firsttime} /> } />
          { this.state.pages.map((page)=>{
            return <Route path={'/' + page} component={()=> <Custom firstTime={this.state.firsttime} pageName={page} /> } />
          } ) }
          <Route path="/contact-us" component={()=> <Contact firstTime={this.state.firsttime} /> } />
          <Route path="/first-time" component={()=> <FirstTimer firstTime={this.state.firsttime} /> } />
        </Router>
      </div>
    );
  }
}

export default App;