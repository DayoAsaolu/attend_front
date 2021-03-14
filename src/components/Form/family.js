import React from 'react';
import { TextField, Paper } from '@material-ui/core';
import useStyles from './styles';
import "react-alert-confirm/dist/index.css";


const Family = ({ onChange, count }) => {
  
    const classes = useStyles();
    const { lastName } = this.state;

    function handleInputChange(e){
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
          [name]: value
      });
  }


  return (
    <Paper className={classes.paper}>
      

        <TextField name="lastName" variant="outlined" label="Last Name" fullWidth onChange={handleInputChange} value={lastName} />
     
    </Paper>
  );
};

export default Family;