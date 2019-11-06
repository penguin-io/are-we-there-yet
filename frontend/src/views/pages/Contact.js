import React from 'react';
import Layout from '../layout/Layout';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom';

class Contact extends React.Component{
    render() {
        if(this.props.firstTime){
            return (
                <Redirect to='/first-time' />
            );
        }
        else{
            return (
                <div>asadas</div>
            );
        }
    }
}

export default Contact;