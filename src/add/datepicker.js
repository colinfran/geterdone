import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles({
  grid: {
    width: '100%',
  },
});

export default function MaterialUIPickers(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(props.state);

  const classes = useStyles();

  function handleDateChange(date) {
    setSelectedDate(date);
    props.setDate(date);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.grid}>
        <DatePicker
          style={{width: '100%'}}
          format={"EEEE MMMM dd, yyyy"}
          label="Due date"
          margin="dense"
          id="mui-pickers-date"
          value={selectedDate}
          onChange={handleDateChange}
          variant="outlined"
          disableToolbar={true}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
