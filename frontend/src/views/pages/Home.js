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
  }
  getPages = page => {
    if (page.type == "front") {
      return (
        <React.Fragment>
          <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
            <div class="col-md-6 px-0">
              <h1 class="display-4 font-italic">
                {this.props.data.posts[0].title}
              </h1>
              <p class="lead my-3">{this.props.data.posts[0].shortDesc}</p>
              <p class="lead mb-0">
                <a href="#" class="text-white font-weight-bold">
                  Continue reading...
                </a>
              </p>
            </div>
          </div>

          <div class="row mb-2">
            <div class="col-md-6">
              <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary">
                    {this.props.data.posts[1].category}
                  </strong>
                  <h3 class="mb-0">{this.props.data.posts[1].title}</h3>
                  <div class="mb-1 text-muted">
                    {this.props.data.posts[1].date}
                  </div>
                  <p class="card-text mb-auto">
                    {this.props.data.posts[1].shortDesc}
                  </p>
                  <a href="#" class="stretched-link">
                    Continue reading
                  </a>
                </div>
                <div class="col-auto d-none d-lg-block">
                  <svg
                    class="bd-placeholder-img"
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
            <div class="col-md-6">
              <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-success">
                    {this.props.data.posts[2].category}
                  </strong>
                  <h3 class="mb-0">{this.props.data.posts[2].title}</h3>
                  <div class="mb-1 text-muted">
                    {this.props.data.posts[2].date}
                  </div>
                  <p class="card-text mb-auto">
                    {this.props.data.posts[2].shortDesc}
                  </p>
                  <a href="#" class="stretched-link">
                    Continue reading
                  </a>
                </div>
                <div class="col-auto d-none d-lg-block">
                  <svg
                    class="bd-placeholder-img"
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
      return (
        <React.Fragment>{this.getPosts(this.props.data.posts)}</React.Fragment>
      );
    } else if (page.type == "contact") {
      return (
        <div class="container">
          <div class="row">
            <div class="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
              <h1 class="section-title">{this.props.data.contact.title}</h1>
            </div>
          </div>
          <div class="row">
            <div
              class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft"
              data-wow-delay=".2s"
            >
              <p>{this.props.data.contact.content}</p>

              <div class="find-widget">
                Company: {this.props.data.contact.company}
              </div>
              <div class="find-widget">
                Address: {this.props.data.contact.address}
              </div>
              <div class="find-widget">
                Phone: {this.props.data.contact.phone}
              </div>
              <div class="find-widget">
                Program: {this.props.data.contact.program}
              </div>
            </div>
            <div class="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
              <form
                class="shake"
                role="form"
                method="post"
                id="contactForm"
                name="contact-form"
                data-toggle="validator"
              >
                <div class="form-group label-floating">
                  <label class="control-label" for="name">
                    Name
                  </label>
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    name="name"
                    required
                    data-error="Please enter your name"
                  />
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group label-floating">
                  <label class="control-label" for="email">
                    Email
                  </label>
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    name="email"
                    required
                    data-error="Please enter your Email"
                  />
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group label-floating">
                  <label class="control-label">Subject</label>
                  <input
                    class="form-control"
                    id="msg_subject"
                    type="text"
                    name="subject"
                    required
                    data-error="Please enter your message subject"
                  />
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group label-floating">
                  <label for="message" class="control-label">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    rows="3"
                    id="message"
                    name="message"
                    required
                    data-error="Write your message"
                  ></textarea>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-submit mt-5">
                  <button class="btn btn-common" type="submit" id="form-submit">
                    <i class="material-icons mdi mdi-message-outline"></i> Send
                    Message
                  </button>
                  <div id="msgSubmit" class="h3 text-center hidden"></div>
                  <div class="clearfix"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else if (page.type == "about") {
      return (
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-sm-6">
              <div class="about-title clearfix">
                <h1>
                  About <span>{this.props.data.contact.company}</span>
                </h1>
                <h3>{this.props.data.contact.title}</h3>
                <div dangerouslySetInnerHTML={{ __html : this.props.data.contact.content}}></div>
                <div class="about-icons">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i
                          id="social-fb"
                          class="fa fa-facebook-square fa-3x social"
                        ></i>
                      </a>{" "}
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i
                          id="social-tw"
                          class="fa fa-twitter-square fa-3x social"
                        ></i>
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="https://plus.google.com/">
                        <i
                          id="social-gp"
                          class="fa fa-google-plus-square fa-3x social"
                        ></i>
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="mailto:cs@goodcompany.com">
                        <i
                          id="social-em"
                          class="fa fa-envelope-square fa-3x social"
                        ></i>
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-5 col-sm-6">
              <div class="about-img">
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
  };
  getPosts = posts => {
    var listing = posts.map((post, key) => (
      <div class="blog-post" key={key}>
        <h2 class="blog-post-title">{post.title}</h2>
        <p class="blog-post-meta">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html : post.content}}></div>
      </div>
    ));
    var archive = [];
    if (this.props.data.data.archive) {
      const map = new Map();
      for (const item of posts) {
        if (!map.has(item.date)) {
          map.set(item.date, true);
          archive.push(item.date);
        }
      }
      var uniqued = archive.map((archive, key) => (
        <li key={key}>
          <a href="#">{archive}</a>
        </li>
      ));
      var archived = () => (
        <div class="p-4">
          <h4 class="font-italic">Archives</h4>
          <ol class="list-unstyled mb-0">{uniqued}</ol>
        </div>
      );
    }
    return (
      <main role="main" class="container">
        <div class="row">
          <div class="col-md-8 blog-main">
            <h3 class="pb-4 mb-4 font-italic border-bottom">
              {this.props.data.data.posts}
            </h3>

            {listing}

            {/* <nav class="blog-pagination">
                        <a class="btn btn-outline-primary" href="#">Older</a>
                        <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
                    </nav> */}
          </div>

          <aside class="col-md-4 blog-sidebar">
            <div class="p-4 mb-3 bg-light rounded">
              <h4 class="font-italic">{this.props.data.data.about}</h4>
              <p class="mb-0">
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
            </div>

            {archived}

            <div class="p-4">
              <h4 class="font-italic">{this.props.data.data.contact}</h4>
              <ol class="list-unstyled">
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
          </aside>
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
          />
          <Layout
            pages={this.props.pages}
            data={this.props.data}
            page={this.props.page}
          >
            {this.getPages(this.props.page)}
          </Layout>
        </div>
      );
    }
  }
}

export default Home;
