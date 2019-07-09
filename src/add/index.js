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

const uuidv1 = require('uuid/v1');

export default class Add extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        inputVal: "",
        time:"",
        on: false
      };
  }

  onSubmit = () => {

    var obj = {
      info: this.state.inputVal,
      time: this.state.time,
      on: this.state.on,
      completed: false
    }
    // var j = setCron(obj);
    // obj.cron = j;
    var rem = localStorage.getItem('reminders') || '{}';
    rem = JSON.parse(rem);
    rem[uuidv1()] = obj;


    localStorage.setItem('reminders', JSON.stringify(rem));
    this.setState({inputVal: "", time: "", on: false});
    history.goBack();
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
                  label="Reminder info"
                  value={this.state.inputVal}
                  onChange={(event)=>{this.setState({inputVal: event.target.value})}}
                  margin="dense"
                  variant="outlined"
                  style={{width: '100%'}}
                />
              </div>
              <div>
                <FormControl variant="outlined" style={{width:'100%'}} margin="dense">
                    <InputLabel style={{backgroundColor: "#fff"}} htmlFor="time-native-helper">How often you want the reminder.</InputLabel>
                      <Select
                        value={this.state.time}
                        onChange={(event)=>{this.setState({time: event.target.value})}}
                        input={<OutlinedInput  name="How often you want the reminder." id="outlined-age-simple" />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={15}>Every 15 minutes</MenuItem>
                        <MenuItem value={30}>Every 30 minutes</MenuItem>
                        <MenuItem value={45}>Every 45 minutes</MenuItem>
                        <MenuItem value={60}>Every 60 minutes</MenuItem>
                        <MenuItem value={120}>Every 120 minutes</MenuItem>
                      </Select>
                  </FormControl>
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.on}
                      onChange={()=> this.setState({on: !this.state.on})}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label={this.state.on ? "On" : "Off"}
                />
              </div>
              <div>
                <Button variant="contained" onClick={this.onSubmit}>
                  Add
                </Button>
              </div>
            </div>
          </div>

      );
  }
}
