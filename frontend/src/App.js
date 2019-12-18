import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import "bootstrap";
import "popper.js";
import "jquery";
import axios from "axios";
import slugify from "slugify";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./views/pages/Home";
import About from "./views/pages/About";
import Custom from "./views/pages/Custom";
import Contact from "./views/pages/Contact";
import FirstTimer from "./views/layout/FirstTimer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firsttime : false,
      data : {},
      pages : [],
      posts : [],
      contact : {},
      about : {},
      darkmode: false,
    }
  }
  componentDidMount() {
    this.getData()

  }
  getData = async () => {
    var _self = this
    await axios.get('http://localhost:8000/data')
    .then(function(res){
      res.data.contact.extra = JSON.parse(res.data.contact.extra)
      _self.setState({ 
        data: res.data.data,
        pages: res.data.pages,
        posts: res.data.posts,
        contact: res.data.contact,
        about: res.data.about,
       });
    })
  }
  toggleDark = () => {
    this.setState(state => ({
      darkmode: !state.darkmode
    }));
}
  handleInput = (e) => {
      let { name, value } = e.target;
      this.setState({ [name]: value });
  }
  render() {
    return (
      <Router>
        <Route
          path="/"
          exact
          component={() => <Home toggleDark={this.toggleDark} firstTime={this.state.firsttime} darkmode={this.state.darkmode} data={this.state} pages={this.state.pages} page={this.state.pages[0]}/>}
        />
        {
          this.state.pages.map((page,id) => 
            <Route
              key={id}
              path={"/" + page.slug}
              component={() => (
                <Home toggleDark={this.toggleDark} firstTime={this.state.firsttime} darkmode={this.state.darkmode} data={this.state} pages={this.state.pages} page={page} />
              )}
            />
          )
        }
        {
          this.state.posts.map((page,id) => 
            <Route
              key={id}
              path={"/p/" + page.id + '/' + slugify(page.title)}
              component={() => (
                <Home toggleDark={this.toggleDark} firstTime={this.state.firsttime} post={page} darkmode={this.state.darkmode} data={this.state} pages={this.state.pages} page={page} />
              )}
            />
          )
        }
        <Route
          path="/first-time"
          component={() => <FirstTimer firstTime={this.state.firsttime} />}
        />
      </Router>
    );
  }
}

export default App;
