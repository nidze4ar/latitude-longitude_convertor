import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Output(props) {
  const classes = useStyles();
  const {lat, long} = props.data

  const setModeInfoBar = (inputString='', profileLength=10) => {    
    let imputLength = inputString.replace(/_/g, '').length
    return imputLength - profileLength === 0? 'success': 'error'
  }

  return (
    <div className={classes.root}>
      <Alert severity={setModeInfoBar(lat.dec, 11)}>Широта: {lat.dec}</Alert>
      <Alert severity={setModeInfoBar(long.dec, 12)}>Долгота: {long.dec}</Alert>
    </div>
  );
}