import React from 'react'
import { alert } from 'react-alert-confirm';
import { FormControl, TextField, Button, Paper } from '@material-ui/core';
import useStyles from './styles'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const Covid19Q = ({}) => {
    const classes = useStyles();

    function handleClickBasic() {
        alert({
          title: "Submission Successful",
          okText: "OK"
        })
      };

    return (
    
        <Paper className={classes.paper}>
            <ul>
                <li>Are you or any member of your household experiencing any of the following:</li>
                <ol>
                    <li>severe difficulty breathing (e.g struggling for each breath, speaking in single words)</li>
                    <li>severe chest pain</li>
                    <li>having a very hard time waking up</li>
                    <li>feeling confused</li>
                    <li>lost consciousness</li>
                </ol>
                <br></br>
                <li>Are you or any member of your household experiencing any of the following:</li>
                <ol>
                    <li>shortness of breath at rest</li>
                    <li>inability to lie down because of difficulty breathing</li>
                    <li>chronic health conditions that you are having difficulty managing because of your current resporatory illness</li>
                </ol>

                <br></br>

                <li>In the past 10 days, have you or any member of your household experienced any of the following: </li>
                <ol>
                    <li>fever</li>
                    <li>new onset of cough or worsening of chronic cough</li>
                    <li>new or worsening shotness of breath</li>
                    <li>new or worsening difficulty breathing</li>
                    <li>sore throat</li>
                    <li>running nose</li>
                </ol>
            <br></br>

                <li>In the past 10 days, have you or any member of your household experienced any of the following: </li>
                <ol>
                    <li>fever</li>
                    <li>new onset of cough or worsening of chronic cough</li>
                    <li>new or worsening shotness of breath</li>
                    <li>new or worsening difficulty breathing</li>
                    <li>sore throat</li>
                    <li>running nose</li>
                </ol>

                <br></br>

                <li>Do you or any member of your household have any of the folowing:</li>
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
                
                <br></br>

                <li> 5. In the past 14 days did you or any member of your household </li>
                <ol>
                    <li>return from travel outside of Canada? </li>
                </ol>
            <RadioGroup name="gender1">
          <FormControlLabel value="yes" control={<Radio />} label="yes" />
          <FormControlLabel value="no" control={<Radio />} label="no" />
          </RadioGroup>

            </ul>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" onClick={handleClickBasic} type="submit" fullWidth>Submit</Button>
            
        </Paper>
    );
};

export default Covid19Q;