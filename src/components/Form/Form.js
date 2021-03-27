import React, { useState, useEffect } from 'react';
import { FormControl, TextField, Button, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/posts';
import useStyles from './styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { alert } from 'react-alert-confirm';
import "react-alert-confirm/dist/index.css";
import Family from './Family'

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ lastName: '', firstName: '', gender: '', group:'', newcomer:'', caucassian:'',forFamily: '',title:'',Q1:'',Q2:'',Q3:'',Q4:'',Q5:'',familydetails:[], phoneNumber:'', email:'',Family });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

  const dispatch = useDispatch();
  const classes = useStyles();
  
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ lastName: '', firstName: '', gender: '', group: '', newcomer: '', caucassian: '',forFamily:'', title:'', Q1:'',Q2:'',Q3:'',Q4:'',Q5:'', phoneNumber:'', email:'',familydetails:[]});
  };

  function handleClickBasic() {

    if (postData.Q1 ==="no" && 
        postData.Q2 ==="no" &&
        postData.Q3 ==="no" &&
        postData.Q4 ==="no" &&
        postData.Q5 ==="no"){
    alert({
      title: "Submission Successful",
      okText: "OK"
    })
  }else{
    alert({
      title: "Submission Successful, Thanks for registering you can join online zoom",
      okText: "OK"
    })
  }
  };


  const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(createPost(postData));
      console.log(postData)
      clear();
  };

  return (
    <Paper className={classes.paper}>
          <ul className={classes.Q1list}>
                <li>Are you or any member of your household experiencing any of the following:</li>
                <ol className={classes.Q1listInner}>
                    <li>severe difficulty breathing (e.g struggling for each breath, speaking in single words)</li>
                    <li>severe chest pain</li>
                    <li>having a very hard time waking up</li>
                    <li>feeling confused</li>
                    <li>lost consciousness</li>
                </ol>

                <RadioGroup name="Q1" value={postData.Q1} onChange={(e) => setPostData({ ...postData, Q1: e.target.value })}>
                <FormControlLabel value="yes" control={<Radio />} label="yes"/>
                <FormControlLabel value="no" control={<Radio />} label="no"/>
                </RadioGroup>

                
                <br></br>

                <li className={classes.QInnerList}>In the past 10 days, have you or any member of your household experienced any of the following: </li>
                <ol>
                    <li>fever</li>
                    <li>new onset of cough or worsening of chronic cough</li>
                    <li>new or worsening shotness of breath</li>
                    <li>new or worsening difficulty breathing</li>
                    <li>sore throat</li>
                    <li>running nose</li>
                </ol>

                <RadioGroup name="Q2" value={postData.Q2} onChange={(e) => setPostData({ ...postData, Q2: e.target.value })}>
                <FormControlLabel value="yes" control={<Radio />} label="yes"/>
                <FormControlLabel value="no" control={<Radio />} label="no"/>
                </RadioGroup>
            <br></br>

                <li className={classes.QInnerList}>In the past 10 days, have you or any member of your household experienced any of the following: </li>
                <ol>
                    <li>fever</li>
                    <li>new onset of cough or worsening of chronic cough</li>
                    <li>new or worsening shotness of breath</li>
                    <li>new or worsening difficulty breathing</li>
                    <li>sore throat</li>
                    <li>running nose</li>
                </ol>
                <RadioGroup name="Q3" value={postData.Q3} onChange={(e) => setPostData({ ...postData, Q3: e.target.value })}>
                <FormControlLabel value="yes" control={<Radio />} label="yes"/>
                <FormControlLabel value="no" control={<Radio />} label="no"/>
                </RadioGroup>
                <br></br>

                <li className={classes.QInnerList}>Do you or any member of your household have any of the folowing:</li>
                <ol>
                    <li>chills</li>
                    <li>painful swallowing</li>
                    <li>stuff nose</li>
                    <li>headache</li>
                    <li>muscle or joint ache</li>
                    <li>feeling unwell, fatigue or severe exhaustion</li>
                    <li>nausea, vomitting, diarrhea or unexplained loss of appetite</li>
                    <li>loss of sense of smell or taste</li>
                    <li>conjunctivitis (pink eye)</li>
                </ol>
                
                <RadioGroup name="Q4" value={postData.Q4} onChange={(e) => setPostData({ ...postData, Q4: e.target.value })}>
                <FormControlLabel value="yes" control={<Radio />} label="yes"/>
                <FormControlLabel value="no" control={<Radio />} label="no"/>
                </RadioGroup>
                <br></br>

                <li className={classes.QInnerList}>In the past 14 days did you or any member of your household </li>
                <ol>
                    <li>return from travel outside of Canada? </li>
                </ol>
                <RadioGroup name="Q5" value={postData.Q5} onChange={(e) => setPostData({ ...postData, Q5: e.target.value })}>
                <FormControlLabel value="yes" control={<Radio />} label="yes"/>
                <FormControlLabel value="no" control={<Radio />} label="no"/>
                </RadioGroup>

          
                    
      </ul> 
 

        
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      
        <h4 className={classes.h4}>Entering Attendance</h4>

        

        <TextField name="lastName" variant="outlined" label="Last Name" fullWidth value={postData.lastName} onChange={(e) => setPostData({ ...postData, lastName: e.target.value })} />


        <TextField name="firstName" variant="outlined" label="First Name" fullWidth value={postData.firstName} onChange={(e) => setPostData({ ...postData, firstName: e.target.value })} />

        <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="gender1" value={postData.gender} onChange={(e) => setPostData({ ...postData, gender: e.target.value })}>
          <FormControlLabel className={classes.opened} value="male" control={<Radio />} label="Male" />
          <FormControlLabel className={classes.opened} value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <RadioGroup aria-label="group" name="group" value={postData.group} onChange={(e) => setPostData({ ...postData, group: e.target.value })}>
          <FormControlLabel className={classes.opened} value="Adult" control={<Radio />} label="Adult" />
          <FormControlLabel className={classes.opened} value="Campus" control={<Radio />} label="Campus" />
          <FormControlLabel className={classes.opened} value="Youth" control={<Radio />} label="Youth" />
          <FormControlLabel className={classes.opened} value="Children" control={<Radio />} label="Children" />
          </RadioGroup>
        </FormControl>

    
      <FormControl component="fieldset">
      <label>Is today your first time?</label>
        <RadioGroup aria-label="newYN" name="newYN" value={postData.newcomer} onChange={(e) => setPostData({ ...postData, newcomer: e.target.value })}>
          <FormControlLabel className={classes.opened}value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel className={classes.opened}value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
        
          {postData.newcomer==="Yes" ? (
            <>
            <FormControl style={{minWidth: 50}}>
            <label>Are you a caucasian?</label>
            <select value={postData.caucassian} onChange={(e) => setPostData({ ...postData, caucassian: e.target.value })}>
              <option value="">Choose</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            </FormControl>

            <TextField name="Phone Number" variant="outlined" label="Phone Number" fullWidth value={postData.phoneNumber} onChange={(e) => setPostData({ ...postData, phoneNumber: e.target.value })} />
            <TextField name="Email" variant="outlined" label="Email" fullWidth value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} />
              </>
            
            ) : 
            (<></>)
            }

        
        
          <FormControl component="fieldset">
              <label>Add Family Members</label>
                <RadioGroup name="newYN" value={postData.forFamily} onChange={(e) => setPostData({ ...postData, forFamily: e.target.value })}>
                  <FormControlLabel className={classes.opened}value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel className={classes.opened}value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>

              {postData.forFamily==="Yes" ? (
            <>
            
            <TextField name="Phone Number" variant="outlined" label="first name" fullWidth value={postData.phoneNumber} onChange={(e) => setPostData({ ...postData, phoneNumber: e.target.value })} />

            {/* {postData.Family.lastName="AppleBee"} */}
            </>
            
            
            ) : 
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