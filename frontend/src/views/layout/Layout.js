import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom';

class Layout extends React.Component {
  render() {
	var items = this.props.pages.map((item,key) => 
		<Link key={key} class="p-2 text-muted" to={'/' + item.slug}>{item.name}</Link>
	)
    return (
		<div className={this.props.darkmode ? "text-white bg-dark" : ""}>
			<header className="blog-header py-3">
				<div className="row flex-nowrap justify-content-between align-items-center">
					<div className="col-4 pt-1">
						{/* <a className="text-muted" href="#">Subscribe</a> */}
					</div>
					<div className="col-4 text-center">
						<Link className={this.props.darkmode ? "blog-header-logo text-dark" : "blog-header-logo text-white"} to="/">{this.props.data.data.title}</Link>
					</div>
					<div className="col-4 d-flex justify-content-end align-items-center">
						{/* <a className="text-muted" href="#">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
						</a> */}
						{/* <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a> */}
					</div>
				</div>
			</header>
			<div id="mySidebar" class="sidebar">
				<a href="#" class="closebtn">&times;</a>
				<a href="#">Edit Mode</a>
				<br />
				<a href="#">Home</a>
				<a href="#">Blog</a>
				<a href="#">About</a>
				<a href="#">Contact</a>
			</div>
			<div className="nav-scroller py-1 mb-2">
				<nav className="nav d-flex justify-content-between">
					{ items }
				</nav>
			</div>
			<div id="main">
			{ this.props.children }
			</div>
			<footer class="blog-footer">
					<p>{ this.props.data.data.footer }</p>
				<p>
					<a href="#">Back to top</a>
				</p>
			</footer>
		</div>
	);
  }
}

export default Layout;
