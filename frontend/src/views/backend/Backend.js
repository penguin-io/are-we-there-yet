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
      showBackend: false,
      showDark: false,
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
      <div>
        <div className="card text-white bg-dark" id="editor">
          <div className="card-header" onClick={this.toggleNav}>Open Editor</div>
          <div className="card-body" style={{ display: this.state.showBackend ? "unset" : "none" }}>
            <h5 className="card-title">Navbar</h5>
            <div className="card-text">
              <label>Dark mode</label>
            <label className="switch">
              <input type="checkbox" onClick={this.props.toggleDark}/>
              <span onClick={this.props.toggleDark} className="slider round"></span>
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Title</span>
              </div>
              <input type="text" className="form-control" placeholder="My Website" aria-label="My Website" aria-describedby="basic-addon1" />
            </div>
            </div>
            <a href="#" className="btn btn-primary">Update</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Backend;
