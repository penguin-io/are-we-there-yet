import React from "react";
import Layout from "../layout/Layout";
import Backend from "../backend/Backend";
import slugify from 'slugify';
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
  }
  getPages = page => {
    if(page && page.type){
      if (page.type == "front") {
        return (
          <React.Fragment>
            <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
              <div className="col-md-6 px-0">
                <h1 className="display-4 font-italic">
                  {this.props.data.posts[0].title}
                </h1>
                <p className="lead my-3">{this.props.data.posts[0].short_desc}</p>
                <p className="lead mb-0">
                  <Link to={"/p/" + this.props.data.posts[1].id + "/" + slugify(this.props.data.posts[2].title)}  className="text-white font-weight-bold">
                    Continue reading...
                  </Link>
                </p>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">
                      {this.props.data.posts[1].category}
                    </strong>
                    <h3 className="mb-0">{this.props.data.posts[1].title}</h3>
                    <div className="mb-1 text-muted">
                      {this.props.data.posts[1].createdAt}
                    </div>
                    <p className="card-text mb-auto">
                      {this.props.data.posts[1].short_desc}
                    </p>
                    <Link to={"/p/" + this.props.data.posts[1].id + "/" + slugify(this.props.data.posts[2].title)} className="stretched-link">
                      Continue reading
                    </Link>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg
                      className="bd-placeholder-img"
                      width="200"
                      height="250"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">
                      {this.props.data.posts[2].category}
                    </strong>
                    <h3 className="mb-0">{this.props.data.posts[2].title}</h3>
                    <div className="mb-1 text-muted">
                      {this.props.data.posts[2].createdAt}
                    </div>
                    <p className="card-text mb-auto">
                      {this.props.data.posts[2].short_desc}
                    </p>
                    <Link to={"/p/" + this.props.data.posts[2].id + "/" + slugify(this.props.data.posts[2].title)} className="stretched-link">
                      Continue reading
                    </Link>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg
                      className="bd-placeholder-img"
                      width="200"
                      height="250"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {this.getPosts(this.props.data.posts)}
          </React.Fragment>
        );
      } else if (page.type == "posts") {
        var posts = this.props.data.posts
        if(this.props.post){
          posts = [this.props.post]
        }
        return (
          <React.Fragment>{this.getPosts(posts)}</React.Fragment>
        );
      } else if (page.type == "contact") {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
                <h1 className="section-title" className={this.props.darkmode ? "text-white bg-dark" : ""}>{this.props.data.contact.title}</h1>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft"
                data-wow-delay=".2s"
              >
                <p>{this.props.data.contact.content}</p>

                <div className="find-widget">
                  Company: {this.props.data.contact.extra.company}
                </div>
                <div className="find-widget">
                  Address: {this.props.data.contact.extra.address}
                </div>
                <div className="find-widget">
                  Phone: {this.props.data.contact.extra.phone}
                </div>
                <div className="find-widget">
                  Program: {this.props.data.contact.extra.program}
                </div>
              </div>
              <div className="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
                <form
                  className="shake"
                  role="form"
                  method="post"
                  id="contactForm"
                  name="contact-form"
                  data-toggle="validator"
                >
                  <div className="form-group label-floating">
                    <label className="control-label" for="name">
                      Name
                    </label>
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      name="name"
                      required
                      data-error="Please enter your name"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group label-floating">
                    <label className="control-label" for="email">
                      Email
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      name="email"
                      required
                      data-error="Please enter your Email"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group label-floating">
                    <label className="control-label">Subject</label>
                    <input
                      className="form-control"
                      id="msg_subject"
                      type="text"
                      name="subject"
                      required
                      data-error="Please enter your message subject"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group label-floating">
                    <label for="message" className="control-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      id="message"
                      name="message"
                      required
                      data-error="Write your message"
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-submit mt-5">
                    <button className="btn btn-common" type="submit" id="form-submit">
                      <i className="material-icons mdi mdi-message-outline"></i> Send
                      Message
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      } else if (page.type == "about") {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-6">
                <div className="about-title clearfix">
                  <h1>
                    About <span>{this.props.data.contact.company}</span>
                  </h1>
                  <h3>{this.props.data.contact.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html : this.props.data.contact.content}}></div>
                  <div className="about-icons">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/">
                          <i
                            id="social-fb"
                            className="fa fa-facebook-square fa-3x social"
                          ></i>
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://twitter.com/">
                          <i
                            id="social-tw"
                            className="fa fa-twitter-square fa-3x social"
                          ></i>
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="https://plus.google.com/">
                          <i
                            id="social-gp"
                            className="fa fa-google-plus-square fa-3x social"
                          ></i>
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="mailto:cs@goodcompany.com">
                          <i
                            id="social-em"
                            className="fa fa-envelope-square fa-3x social"
                          ></i>
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="about-img">
                  <img
                    src="http://animalia.bio/uploads/animals/photos/full/1.25x1/emperor-penguins-15.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  };
  getPosts = posts => {
    var listing = posts.map((post, key) => (
      <div className="blog-post" key={key}>
        <h2 className="blog-post-title">{post.title}</h2>
        <p className="blog-post-meta">{post.createdAt}</p>
        <div dangerouslySetInnerHTML={{ __html : post.content}}></div>
      </div>
    ));
    var archive = [];
    if (this.props.data.data.archive) {
      const map = new Map();
      for (const item of posts) {
        if (!map.has(item.createdAt)) {
          map.set(item.createdAt, true);
          archive.push(item.createdAt);
        }
      }
      var uniqued = archive.map((archive, key) => (
        <li key={key}>
          <a href="#">{archive}</a>
        </li>
      ));
      var archived = () => (
        <div className="p-4">
          <h4 className="font-italic">Archives</h4>
          <ol className="list-unstyled mb-0">{uniqued}</ol>
        </div>
      );
    }
    return (
      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            {
              () => {
                if(!this.props.post){
                  return(
                    <h3 className="pb-4 mb-4 font-italic border-bottom">
                      {this.props.data.data.posts}
                    </h3>
                  )
                }
              }
            }

            {listing}

            {/* <nav className="blog-pagination">
                        <a className="btn btn-outline-primary" href="#">Older</a>
                        <a className="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
                    </nav> */}
          </div>

          <div className="col-md-4 blog-sidebar">
            <div className="p-4 mb-3 rounded">
              <h4 className="font-italic">{this.props.data.data.about}</h4>
              <p className="mb-0">
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
            </div>

            {archived}

            <div className="p-4">
              <h4 className="font-italic">{this.props.data.data.contact}</h4>
              <ol className="list-unstyled">
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    );
  };
  render() {
    if (this.props.firstTime) {
      return <Redirect to="/first-time" />;
    } else {
      return (
        <div>
          <Backend
            pages={this.props.pages}
            data={this.props.data}
            page={this.props.page}
            toggleDark={this.props.toggleDark}
          />
          <Layout
            pages={this.props.pages}
            data={this.props.data}
            page={this.props.page}
            darkmode={this.props.darkmode}
          >
            {this.getPages(this.props.page)}
          </Layout>
        </div>
      );
    }
  }
}

export default Home;
