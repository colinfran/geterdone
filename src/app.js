import React from 'react';
import Add from './add';
import Home from './home'
import Completed from './completed'
import { HashRouter as Router, Route, Link } from "react-router-dom";
import hashHistory from './history.js';
import ReactLoading from 'react-loading';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {active:'home', hover: '', loading: true}
  }

  onHover = (val) => {
    this.setState({hover: val});
  }

  linkOnClick = (val) => {
    this.setState({active: val});

  }

  componentDidMount() {
    setTimeout(() => {this.setState({loading:false})},2000);
  }


  render() {
    if (this.state.loading){
      return (
        <div style={{display:'flex', justifyContent: 'center', marginTop: '30%'}}>
          <ReactLoading type={"spin"} color={"#000"} height={100} width={100} />
        </div>
      );
    }
    else {
      return (
        <Router hashHistory={hashHistory}>
          <div className="topnav">
            <div className="topnav-centered">
              <Link
                className={this.state.hover  === "home" && this.state.active !== "home" ? "hover" : ""}
                onMouseEnter={() => this.onHover("home")}
                onMouseLeave={() => this.onHover("")}
                style={this.state.active === "home" ? {backgroundColor: '#fff', color: '#000', pointerEvents: 'none'} : {}}
                to="/"
                onClick={() => this.linkOnClick("home")}>Home</Link>
              <Link
                className={this.state.hover === "completed" ? "hover" : ""}
                onMouseEnter={() => this.onHover("completed")}
                onMouseLeave={() => this.onHover("")}
                style={this.state.active === "completed" ? {backgroundColor: '#fff', color: '#000', pointerEvents: 'none'} : {}}
                replace={"/completed" === location.pathname}
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
}
