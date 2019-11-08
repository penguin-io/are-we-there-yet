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
      data : {
        title : 'My Website Lol',
        footer : 'Copyright 2019. By Goodie Boi',
        posts : 'Blog',
        about : 'About',
        archive : true,
        contact : 'Find Us in'
      },
      pages : [
          { slug : 'home', type: 'front', name : 'Home' },
          { slug : 'blog', type: 'posts', name : 'Blog' },
          { slug : 'about', type: 'about', name : 'About' },
          { slug : 'contact', type: 'contact', name : 'Contact' },
      ],
      posts : [
        {
          shortDesc: 'Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.',
          category: 'Foobar',
          title : 'Sample blog post',
          date : 'January 1, 2014',
          content: '<p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p><hr /><p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><blockquote><p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></blockquote><p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p><h2>Heading</h2><p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p><h3>Sub-heading</h3><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><pre><code>Example code block</code></pre><p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p><h3>Sub-heading</h3><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p><ul><li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li><li>Donec id elit non mi porta gravida at eget metus.</li><li>Nulla vitae elit libero, a pharetra augue.</li></ul><p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p><ol><li>Vestibulum id ligula porta felis euismod semper.</li><li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li><li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li></ol><p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>'
        },
        {
          shortDesc: 'Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.',
          category: 'Foobar',
          title : 'Sample blog post',
          date : 'January 1, 2014',
          content: '<p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p><hr /><p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><blockquote><p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></blockquote><p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p><h2>Heading</h2><p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p><h3>Sub-heading</h3><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><pre><code>Example code block</code></pre><p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p><h3>Sub-heading</h3><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p><ul><li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li><li>Donec id elit non mi porta gravida at eget metus.</li><li>Nulla vitae elit libero, a pharetra augue.</li></ul><p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p><ol><li>Vestibulum id ligula porta felis euismod semper.</li><li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li><li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li></ol><p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>'
        },
        {
          shortDesc: 'Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.',
          category: 'Foobar',
          title : 'Sample blog post',
          date : 'January 1, 2014',
          content: '<p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p><hr /><p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><blockquote><p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></blockquote><p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p><h2>Heading</h2><p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p><h3>Sub-heading</h3><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><pre><code>Example code block</code></pre><p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p><h3>Sub-heading</h3><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p><ul><li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li><li>Donec id elit non mi porta gravida at eget metus.</li><li>Nulla vitae elit libero, a pharetra augue.</li></ul><p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p><ol><li>Vestibulum id ligula porta felis euismod semper.</li><li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li><li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li></ol><p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>'
        },
        {
          shortDesc: 'Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.',
          category: 'Foobar',
          title : 'Sample blog post',
          date : 'January 1, 2014',
          content: '<p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p><hr /><p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><blockquote><p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></blockquote><p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p><h2>Heading</h2><p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p><h3>Sub-heading</h3><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><pre><code>Example code block</code></pre><p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p><h3>Sub-heading</h3><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p><ul><li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li><li>Donec id elit non mi porta gravida at eget metus.</li><li>Nulla vitae elit libero, a pharetra augue.</li></ul><p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p><ol><li>Vestibulum id ligula porta felis euismod semper.</li><li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li><li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li></ol><p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>'
        }
      ],
      contact : {
        title : 'Love to Hear From You',
        content : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content.',
        company : 'GoodCompany',
        address : '999 Makan bang .St',
        phone: '+ 6281-1890-9767',
        program: 'Mon to Sat: 09:30 AM - 10.30 PM'
      },
      about : {
        company : 'GoodCompany',
        title : 'Lorem ipsum dolor sit amet',
        content : '<p class="about-paddingB">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecaliquet dolor libero, eget venenatis mauris finibus dictum.Vestibulum quis elit eget neque porttitor congue non sit ametdolor. Proin pretium purus a lorem ornare{" "}</p><p>sed lobortis pulvinar. Integer laoreet mi id eros portaeuismod. Suspendisse potenti. Nulla eros mauris, convallis etsem tempus, viverra hendrerit sapien</p>' 
      }
    }
  }
  addthis = () => {

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
          component={() => <Home firstTime={this.state.firsttime} data={this.state} pages={this.state.pages} page={this.state.pages[0]}/>}
        />
        {this.state.pages.map((page,id) => 
            <Route
              key={id}
              path={"/" + page.slug}
              component={() => (
                <Home firstTime={this.state.firsttime} data={this.state} pages={this.state.pages} page={page} />
              )}
            />
        )}
        <Route
          path="/first-time"
          component={() => <FirstTimer firstTime={this.state.firsttime} />}
        />
      </Router>
    );
  }
}

export default App;
