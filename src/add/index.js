import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link, Redirect } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import history from '../history.js';
import setCron from '../cron.js';
import MaterialUIPickers from './datepicker.js'
const uuidv1 = require('uuid/v1');

export default class Add extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        titleVal: "",
        descriptionVal: "",
        date: new Date(),
      };
  }

  onSubmit = () => {

    var obj = {
      title: this.state.titleVal,
      description: this.state.descriptionVal,
      date: this.state.date,
      completed: false
    }
    // var j = setCron(obj);
    // obj.cron = j;
    var rem = localStorage.getItem('reminders') || '{}';
    rem = JSON.parse(rem);
    rem[uuidv1()] = obj;


    localStorage.setItem('reminders', JSON.stringify(rem));
    this.setState({titleVal: "", descriptionVal: "", date: new Date()});
    history.goBack();
  }

  setDate = (val) =>{
    this.setState({date: val});

  }

  render() {
      return (
          <div>
            <Link to="/">
              <IconButton aria-label="Back" size="medium" style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
                <ArrowBackIcon fontSize="inherit" />
              </IconButton>
            </Link>
            <div style={{display: 'flex', flexDirection: 'column', margin: 25, marginTop: 0,  height: 202, display:'flex', flexDirection: 'column'}}>
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="Reminder title"
                  value={this.state.titleVal}
                  onChange={(event)=>{this.setState({titleVal: event.target.value})}}
                  margin="dense"
                  variant="outlined"
                  style={{width: '100%'}}
                />
              </div>
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="Reminder description"
                  value={this.state.descriptionVal}
                  onChange={(event)=>{this.setState({descriptionVal: event.target.value})}}
                  margin="dense"
                  variant="outlined"
                  style={{width: '100%'}}
                />
              </div>
              <div>
                <MaterialUIPickers setDate={this.setDate} date={this.state.date}/>
              </div>
              <div style={{marginTop: 8}}>
                <Button variant="contained" onClick={this.onSubmit}>
                  Add
                </Button>
              </div>
            </div>
          </div>

      );
  }
}
