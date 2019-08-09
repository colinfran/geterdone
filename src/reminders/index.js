import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import format from '@date-io/date-fns';
import Moment from 'react-moment';


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

  setCompleted = (key) => {
    var rem = this.state.reminders;
    rem[key].completed = true;
    this.setState({reminders: rem});
    setTimeout(() => {
      var compl = localStorage.getItem('completed') || '{}';
      compl = JSON.parse(compl);
      compl[key] = rem[key];
      localStorage.setItem('completed', JSON.stringify(compl));
      delete rem[key];
      this.setState({reminders: rem});
      localStorage.setItem('reminders', JSON.stringify(rem));
    }, 500);

  }

  // renderDate = (val) => {
  //   var date = new Date(val);
  //   console.log(date);
  //   return (`Due: ${format(new Date(), 'dddd MMMM do, YYYY')}`);
  // }

  renderList = () => {
    if (Object.keys(this.state.reminders).length === 0){
      return (
        <div>No Reminders</div>
      );
    }
    else{
      return(
        <ReactCSSTransitionGroup
         transitionName="fade"
         transitionEnterTimeout={500}
         transitionLeaveTimeout={300}>
         {Object.keys(this.state.reminders).map((val, i) => (
           <div key={val} style={{paddingLeft: 10, paddingRight:10, height: 50, display:'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, borderRadius: 2, boxShadow: '0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20)'}}>
             <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
               <div>
                 <div className="round">
                   <input style={{alignSelf: 'center', width: 25, height: 25}} type="checkbox" id={val}
                   onChange={() => {this.setCompleted(val)}}
                   />
                 <label htmlFor={val}></label>
                 </div>
               </div>
             </div>
             <div style={{display:'flex', flexDirection: 'column',alignSelf: 'center'}}>
               <div style={{alignSelf: 'center', fontWeight: 600}}>
                 {this.state.reminders[val].title}
               </div>
               <div style={{alignSelf: 'center', fontSize: 14}}>
                 {this.state.reminders[val].description}
               </div>
               <div style={{alignSelf: 'center', fontSize: 10}}>
                 <Moment format="dddd, MMMM Do YYYY">{this.state.reminders[val].date}</Moment>
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
