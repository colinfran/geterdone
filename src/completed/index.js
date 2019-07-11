import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CountdownTimer from "react-component-countdown-timer";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import format from '@date-io/date-fns';
import Moment from 'react-moment';


export default class Completed extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      completed: {}
    };
  }

  componentDidMount(){
    var rem = localStorage.getItem('completed') || '{}';
    rem = JSON.parse(rem);
    this.setState({completed: rem});
  }

  removeReminder = (val) => {
    var rem = JSON.stringify(this.state.completed);
    rem = JSON.parse(rem);
    // var j = rem[val].cron;
    // j.cancel();
    delete rem[val];
    localStorage.setItem('completed', JSON.stringify(rem))
    this.setState({completed: rem});
  }

  renderDate = (val) => {
    return (`Due: ${format(new Date(), 'dddd MMMM do, YYYY')}`);
  }

  unsetCompleted = (key) => {
    var compl = this.state.completed;
    compl[key].completed = false;
    this.setState({completed: compl});
    setTimeout(() => {
      var rem = localStorage.getItem('reminders') || '{}';
      rem = JSON.parse(rem);
      rem[key] = compl[key];
      localStorage.setItem('reminders', JSON.stringify(rem));
      delete compl[key];
      this.setState({completed: compl});
      localStorage.setItem('completed', JSON.stringify(compl))
    }, 500);
  }

  renderList = () => {
    if (Object.keys(this.state.completed).length === 0){
      return (
        <div>No Completed Reminders</div>
      );
    }
    else{
      return(
        <ReactCSSTransitionGroup
           transitionName="fade"
           transitionEnterTimeout={1000}
           transitionLeaveTimeout={300}>
            {Object.keys(this.state.completed).map((val, i) => (
              <div key={val} style={{paddingLeft: 10, paddingRight:10, height: 50, display:'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, borderRadius: 2, boxShadow: '0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20)'}}>
                <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <div>
                    <div className="round">
                      <input style={{alignSelf: 'center', width: 25, height: 25}} type="checkbox" id={`checkbox${val}`} checked={this.state.completed[val].completed} onChange={() => this.unsetCompleted(val)}/>
                      <label htmlFor={`checkbox${val}`}></label>
                    </div>
                  </div>
                </div>
                <div style={{display:'flex', flexDirection: 'column',alignSelf: 'center'}}>
                  <div style={{alignSelf: 'center', fontWeight: 600}}>
                    {this.state.completed[val].title}
                  </div>
                  <div style={{alignSelf: 'center', fontSize: 14}}>
                    {this.state.completed[val].description}
                  </div>
                  <div style={{alignSelf: 'center', fontSize: 10}}>
                    <Moment format="dddd, MMMM Do YYYY">{this.state.completed[val].date}</Moment>
                  </div>
                </div>
                <div style={{alignSelf: 'center'}}>
                  <Button size="small" variant="contained" color="secondary" onClick={()=> this.removeReminder(val)}>
                    <DeleteIcon />
                  </Button>
                </div>
              </div>
            ))}
         </ReactCSSTransitionGroup>
        );
    }
  }

  render() {
      return (
          <div style={{display:'flex', flexDirection: 'column'}}>
            <div style={{display:'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <h3 style={{justifySelf: 'center'}}>Completed Tasks</h3>
            </div>
            <div style={{marginLeft: 25, marginRight: 25, display: 'flex',flexDirection: 'column',justifyContent: 'space-between'}}>
              {this.renderList()}
            </div>
          </div>

      );
  }
}
