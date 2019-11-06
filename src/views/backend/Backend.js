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
        <div
          id="mySidebar"
          class="sidebar"
          style={{ width: this.state.showBackend ? "250px" : "30px" }}
        >
          <div className="row">
            <div className="col-md-10">
              <a class="closebtn" onClick={this.toggleNav}>
                &times;
              </a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Clients</a>
              <a href="#">Contact</a>
            </div>
            <div className="col-md-2">
              <button class="openbtn" onClick={this.toggleNav}>
                &#9776; Toggle Sidebar
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default Backend;
