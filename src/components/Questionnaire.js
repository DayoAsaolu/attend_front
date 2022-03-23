import React from 'react'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { alert } from 'react-alert-confirm';

import './people.css'

class Questions extends React.Component {

    constructor(props){
        super(props)
  
        this.state = {
          Q1: "",
          Q4: undefined
        }
    }
  
    handleClickBasic = () => {

        if (this.state.Q1 ==="no"){

            this.props.showForm(true);
            this.props.getVaccineData(this.state.Q4);
      }else{
            const responses = [this.state.Q1];
            var countResponse = 0;
            responses.map((response, index) => {
                if(response === "yes" || response==="no"){
                    countResponse++;
                }
                return countResponse
            })
            if(countResponse !== 1){
                alert({
                    title: "Please enter all required fields",
                    okText: "OK"
                })
            } else {
                this.props.showForm(true);
                this.props.toZoom(true);
            }
        }
    };

    render(){
        return (
            <div className="Questions">
                <ul>
                
                    <li >In the past 10 days, have you or any member of your household experienced any of the following: </li>
                    <ol>
                        <li>fever</li>
                        <li>new onset of cough or worsening of chronic cough</li>
                        <li>new or worsening shotness of breath</li>
                        <li>new or worsening difficulty breathing</li>
                        <li>sore throat</li>
                        <li>running nose</li>
                    </ol>
                
                    <RadioGroup name="Q1" onChange={(e) => this.setState({Q1: e.target.value})}>
                    <FormControlLabel value="yes" control={<Radio />} label="yes"/>
                    <FormControlLabel value="no" control={<Radio />} label="no"/>
                    </RadioGroup>
                <br></br>
                
                    
                    <li >Have you been vaccinated? </li>
                    <RadioGroup name="Q2" onChange={(e) => this.setState({Q2: e.target.value})}>
                    <FormControlLabel value="yes" control={<Radio />} label="yes"/>
                    <FormControlLabel value="no" control={<Radio />} label="no"/>
                    <FormControlLabel value="Prefer not to answer" control={<Radio />} label="prefer not to answer"/>
                    </RadioGroup>
                </ul> 

                <button className="submitButton" onClick={this.handleClickBasic}>Submit</button>
            </div>
        )
    }
}
export default Questions
