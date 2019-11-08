import React from "react";
import Layout from "../layout/Layout";
import Backend from "../backend/Backend";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
          folderName: "./templates/snapshot"
        };
      }
    render() {
        if (this.props.firstTime) {
        return <Redirect to="/first-time" />;
        } else {
      return (
        <div>
            <Backend />
            <Layout>
                djnkjnsd
            </Layout>
        </div>
      );
    }
  }
}

export default Home;
