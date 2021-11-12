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
          Q2: "",
          Q3: "",
          Q4: "",
          Q5: "",
          Q6: undefined
        }
    }
  
    handleClickBasic = () => {

        if (this.state.Q1 ==="no" && 
            this.state.Q2 ==="no" &&
            this.state.Q3 ==="no" &&
            this.state.Q4 ==="no" &&
            this.state.Q5 ==="no"){

            this.props.showForm(true);
            this.props.getVaccineData(this.state.Q6);
      }else{
            const responses = [this.state.Q1, this.state.Q2, this.state.Q3, this.state.Q4, this.state.Q5];
            var countResponse = 0;
            responses.map((response, index) => {
                if(response === "yes" || response==="no"){
                    countResponse++;
                }
                return countResponse
            })
            if(countResponse !== 5){
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
                    <li>Are you or any member of your household experiencing any of the following:</li>
                    <ol >
                        <li>severe difficulty breathing (e.g struggling for each breath, speaking in single words)</li>
                        <li>severe chest pain</li>
                        <li>having a very hard time waking up</li>
                        <li>feeling confused</li>
                        <li>lost consciousness</li>
                    </ol>
                
                    <RadioGroup name="Q1" onChange={(e) => this.setState({Q1: e.target.value})} required={true}>
                    <FormControlLabel value="yes" control={<Radio />} label="yes"/>
                    <FormControlLabel value="no" control={<Radio />} label="no"/>
                    </RadioGroup>
                
                    
                    <br></br>
                
                    <li >In the past 10 days, have you or any member of your household experienced any of the following: </li>
                    <ol>
                        <li>fever</li>
                        <li>new onset of cough or worsening of chronic cough</li>
                        <li>new or worsening shotness of breath</li>
                        <li>new or worsening difficulty breathing</li>
                        <li>sore throat</li>
                        <li>running nose</li>
                    </ol>
                
                    <RadioGroup name="Q2" onChange={(e) => this.setState({Q2: e.target.value})}>
                    <FormControlLabel value="yes" control={<Radio />} label="yes"/>
                    <FormControlLabel value="no" control={<Radio />} label="no"/>
                    </RadioGroup>
                <br></br>
                
                    <li >In the past 10 days, have you or any member of your household experienced any of the following: </li>
                    <ol>
                        <li>fever</li>
                        <li>new onset of cough or worsening of chronic cough</li>
                        <li>new or worsening shotness of breath</li>
                        <li>new or worsening difficulty breathing</li>
                        <li>sore throat</li>
                        <li>running nose</li>
                    </ol>
                    <RadioGroup name="Q3"  onChange={(e) => this.setState({Q3: e.target.value})}>
                    <FormControlLabel value="yes" control={<Radio />} label="yes"/>
                    <FormControlLabel value="no" control={<Radio />} label="no"/>
                    </RadioGroup>
                    <br></br>
                
                    <li >Do you or any member of your household have any of the folowing:</li>
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
                    
                    <RadioGroup name="Q4" onChange={(e) => this.setState({Q4: e.target.value})}>
                    <FormControlLabel value="yes" control={<Radio />} label="yes"/>
                    <FormControlLabel value="no" control={<Radio />} label="no"/>
                    </RadioGroup>
                    <br></br>
                
                    <li >In the past 14 days did you or any member of your household </li>
                    <ol>
                        <li>return from travel outside of Canada? </li>
                    </ol>
                    <RadioGroup name="Q5" onChange={(e) => this.setState({Q5: e.target.value})}>
                    <FormControlLabel value="yes" control={<Radio />} label="yes"/>
                    <FormControlLabel value="no" control={<Radio />} label="no"/>
                    </RadioGroup>

                    <li >Have you been vaccinated? </li>
                    <RadioGroup name="Q6" onChange={(e) => this.setState({Q6: e.target.value})}>
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
