import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Reminders from '../reminders'
import { Link } from "react-router-dom";



export default class Home extends React.Component {
    render() {
        return (
          <div>
            <div style={{display:'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <h3 style={{justifySelf: 'center'}}>Tasks To Do</h3>
            </div>
            <div style={{marginLeft: 25,marginRight: 25, display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <Reminders/>
            </div>
            <div style={{display:'flex', position: 'fixed', right: 20, bottom: 20}}>
              <Link to="/add">
                <Fab color="primary" aria-label="Add">
                  <AddIcon />
                </Fab>
              </Link>
            </div>
          </div>

        );
    }
}
