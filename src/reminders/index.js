import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import CountdownTimer from "react-component-countdown-timer";

export default class Reminders extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      reminders: {}
    };
  }

  componentWillMount(){
    var rem = localStorage.getItem('reminders') || '{}';
    rem = JSON.parse(rem);
    this.setState({reminders: rem});
  }

  removeReminder = (val) => {
    var rem = JSON.stringify(this.state.reminders);
    rem = JSON.parse(rem);
    // var j = rem[val].cron;
    // j.cancel();
    delete rem[val];
    localStorage.setItem('reminders', JSON.stringify(rem))
    this.setState({reminders: rem});
  }

  renderTime = (val) => {
    if (val.time === 15 || val.time === 30 || val.time === 45){
      return (
        <span>{`Every ${val.time} minutes`}</span>
      );
    }
    else if (val.time === 60){
      return (
        <span>{`Every hour`}</span>
      );
    }
    else if (val.time === 120){
      return (
        <span>{`Every 2 hours`}</span>
      );
    }
  }

  setCompleted = (key) => {
    var rem = this.state.reminders;
    rem[key].completed = true;
    this.setState({reminders: rem});
    var compl = localStorage.getItem('completed') || '{}';
    compl = JSON.parse(compl);
    compl[key] = rem[key];
    localStorage.setItem('completed', JSON.stringify(compl));
    delete rem[key];
    this.setState({reminders: rem});
    localStorage.setItem('reminders', JSON.stringify(rem));

  }

  renderList = () => {
    if (Object.keys(this.state.reminders).length === 0){
      return (
        <div>No Reminders</div>
      );
    }
    else{
      return(
        <ReactCSSTransitionGroup
         transitionName="example"
         transitionEnterTimeout={500}
         transitionLeaveTimeout={1000}>
         {Object.keys(this.state.reminders).slice(0).reverse().map((val, i) => (
           <div key={val} style={{paddingLeft: 10, paddingRight:10, height: 50, display:'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, borderRadius: 2, boxShadow: '0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20)'}}>
             <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
               <div>
                 <div className="round">
                   <input style={{alignSelf: 'center', width: 25, height: 25}} type="checkbox" id="checkbox"
                   onChange={() => {this.setCompleted(val)}}
                   checked={this.state.reminders[val].completed}/>
                   <label htmlFor="checkbox"></label>
                 </div>
               </div>
             </div>
             <div style={{display:'flex', flexDirection: 'column',alignSelf: 'center'}}>
               <div style={{alignSelf: 'center'}}>
                 {this.state.reminders[val].info}
               </div>
               <div style={{alignSelf: 'center', fontSize: 10}}>
               {this.renderTime(this.state.reminders[val], val)}
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
            {this.renderList()}
          </div>

      );
  }
}
