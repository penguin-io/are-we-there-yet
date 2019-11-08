import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class Backend extends React.Component {
  constructor() {
    super();
    this.state = {
      showBackend: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState(state => ({
      showBackend: !state.showBackend
    }));
  }
  render() {
    return (
      <div class="card" id="editor">
      <div class="card-header" onClick={this.toggleNav}>
      </div>
      <div class="card-body" style={{display : this.state.showBackend ? 'unset' : 'none'}}>
        <h5 class="card-title">Navbar</h5>
        <div class="card-text">
          Background Color :
          <select onChange={ (e) => this.handleChange(e) }>
            <option value="white">White</option>
            <option value="yellow">Yellow</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
          </select>
        </div>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    );
  }
}

export default Backend;
