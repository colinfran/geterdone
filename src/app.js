import React from 'react';
import Add from './add';
import Home from './home'
import Completed from './completed'
import { HashRouter as Router, Route, Link } from "react-router-dom";
import history from './history.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {active:'home', hover: ''}
  }

  onHover = (val) => {
    this.setState({hover: val});
  }

  linkOnClick = (val) => {
    this.setState({active: val});

  }

  render() {
      return (
        <Router history={history}>
          <div className="topnav">
            <div className="topnav-centered">
              <Link
                className={this.state.hover === "home" ? "hover" : ""}
                onMouseEnter={() => this.onHover("home")}
                onMouseLeave={() => this.onHover("")}
                style={this.state.active === "home" ? {backgroundColor: '#fff', color: '#000'} : {}}
                to="/"
                onClick={() => this.linkOnClick("home")}>Home</Link>
              <Link
                className={this.state.hover === "completed" ? "hover" : ""}
                onMouseEnter={() => this.onHover("completed")}
                onMouseLeave={() => this.onHover("")}
                style={this.state.active === "completed" ? {backgroundColor: '#fff', color: '#000'} : {}}
                to="/completed"
                onClick={() => this.linkOnClick("completed")}>Done</Link>
            </div>

          </div>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/add" component={Add} />
            <Route path="/completed" component={Completed} />
          </div>
        </Router>

      );
  }
}
