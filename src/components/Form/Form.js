import React, { useState, useEffect } from 'react';
import { FormControl, TextField, Button, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/posts';
import useStyles from './styles';
import Family from './family'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { alert } from 'react-alert-confirm';
import "react-alert-confirm/dist/index.css";


const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ lastName: '', firstName: '', gender: '', group:'', newcomer:'', caucassian:'',forFamily: '',title:'', family:'', count:'', familyAray:[] });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ lastName: '', firstName: '', gender: '', group: '', newcomer: '', caucassian: '',forFamily:'',title:'',family:'',count:'' });
  };

  function handleClickBasic() {
    alert({
      title: "Submission Successful",
      okText: "OK"
    })
  }

  

  const handleSubmit = async (e) => {
      e.preventDefault();

      dispatch(createPost(postData));
      clear();
  };

 
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      
        <h4 className={classes.h4}>Entering Attendance</h4>

        <TextField name="lastName" variant="outlined" label="Last Name" fullWidth value={postData.lastName} onChange={(e) => setPostData({ ...postData, lastName: e.target.value })} />


        <TextField name="firstName" variant="outlined" label="First Name" fullWidth value={postData.firstName} onChange={(e) => setPostData({ ...postData, firstName: e.target.value })} />


        <TextField name="forFamily" variant="outlined" label="Familes can fill this form instead" fullWidth value={postData.forFamily} onChange={(e) => setPostData({ ...postData, forFamily: e.target.value })} />

        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={postData.gender} onChange={(e) => setPostData({ ...postData, gender: e.target.value })}>
          <FormControlLabel className={classes.opened} value="male" control={<Radio />} label="Male" />
          <FormControlLabel className={classes.opened} value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Group</FormLabel>
          <RadioGroup aria-label="group" name="group" value={postData.group} onChange={(e) => setPostData({ ...postData, group: e.target.value })}>
          <FormControlLabel className={classes.opened} value="Adult" control={<Radio />} label="Adult" />
          <FormControlLabel className={classes.opened} value="Campus" control={<Radio />} label="Campus" />
          <FormControlLabel className={classes.opened} value="Youth" control={<Radio />} label="Youth" />
          <FormControlLabel className={classes.opened} value="Children" control={<Radio />} label="Children" />
          </RadioGroup>
        </FormControl>

    
      <FormControl component="fieldset">
        <FormLabel component="legend">Is today your first time?</FormLabel>
        <RadioGroup aria-label="newYN" name="newYN" value={postData.newcomer} onChange={(e) => setPostData({ ...postData, newcomer: e.target.value })}>
          <FormControlLabel className={classes.opened}value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel className={classes.opened}value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
        
          {postData.newcomer==="Yes" ? (
            <FormControl style={{minWidth: 50}}>
            <label> Are you a caucasian?</label>
            <select value={postData.caucassian} onChange={(e) => setPostData({ ...postData, caucassian: e.target.value })}>
              <option value="">Choose</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            </FormControl>) : 
            (<></>)
            }

      {/* <FormControl component="fieldset">
        <FormLabel component="legend">Add Family/Roomates</FormLabel>
        <RadioGroup aria-label="Fam" name="Fam" value={postData.family} onChange={(e) => setPostData({ ...postData, family: e.target.value })}>
          <FormControlLabel className={classes.opened}value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel className={classes.opened}value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl> */}


            {postData.family==="Yes" ? (
            <FormControl style={{minWidth: 50}}>
            <label> More family</label>
              <Family callbackFromParent={this.myCallback}/>
              
              {console.log(postData.count)}
              
            </FormControl>) : 
            (<></>)
            }
        
        
        <Paper className={classes.subT}>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" onClick={handleClickBasic} type="submit" fullWidth>Submit</Button>


        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </Paper>

      </form>
    </Paper>
  );
};

export default Form;