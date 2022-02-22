import React from 'react';

import {group, sex, relation} from './Fixtures';
import RadioOptions from './RadioOptions';

import "react-alert-confirm/dist/index.css";
import './people.css'

class Family extends React.Component{
    constructor(props){
        super(props)
  
        this.state = {
          familyFirstName: undefined,
          familyLastName: props.passLastName,
          gender: undefined,
          relation: undefined,
          group: undefined
        }
    }
    
    onfirstNameChange = (e) => {
        const familyFirstName = e.target.value;
        this.setState(() => ({ familyFirstName }));
    };

    onlastNameChange = (e) => {
        const familyLastName = e.target.value;
        this.setState(() => ({ familyLastName }));
    };

    handleSexChange = (e) => {
        this.setState({gender: e.target.value});
    };

    handleRelationChange = (e) => {
        this.setState({relation: e.target.value});
    };

    handleGroupChange = (e) => {
        this.setState({group: e.target.value});
    };

    clearForm = (e) => {
        this.setState({familyFirstName: ''});
        this.setState({familyLastName: ''});
        this.setState({gender: ''});
        this.setState({relation: ''});
        this.setState({group: ''});
    }

    alertConfirmation = (fname, lname) => {
        alert(`Added ${fname} ${lname}`)
    }
    

    onSubmit = (e) => {
        e.preventDefault();
        const family = {
            familyFirstName: this.state.familyFirstName,
            familyLastName: this.state.familyLastName,
            gender: this.state.gender,
            relation: this.state.relation,
            group: this.state.group
        };
        if (this.state.familyFirstName === "" || this.state.familyLastName === ""){
            alert("Please enter required fields.")
        } else {
            this.props.passFamilyMember(family);
            this.alertConfirmation(family.familyFirstName, family.familyLastName)
            this.clearForm();
        }
    }

    render(){
        return(
            <div className="option">
                <h3 style={{width: '80%'}}>Please click the "Click to Add Family" button for each family member added. Thanks.</h3>
                <form>
                    <input type='text' placeholder='First Name' name='firstName' onChange={this.onfirstNameChange} required/> <br />
                    <input type="text" placeholder="Last Name" name="lastName" value={this.state.familyLastName} onChange={this.onlastNameChange} required/> <br />
                    <div style={{width: '70%', display: 'flex', flexDirection: 'column'}}>
                        <div className="col">
                            <h4>Gender</h4>
                            <RadioOptions onChange={this.handleSexChange} options={sex} name="gender"/><br />
                        </div>
                        <div className="col1">
                            <h4>Relationship</h4> 
                            <RadioOptions onChange={this.handleRelationChange} options={relation} name="relation"/><br/> 
                        </div>
                        <div className="col2">
                            <h4>Group</h4>   
                            <RadioOptions onChange={this.handleGroupChange} options={group} name="group"/><br />
                        </div>
                    </div>
                    <button style={{width: '40%'}} type="reset" className="clickToAddFam" onClick={this.onSubmit}> Click to Add Family</button>
                </form>
            </div> 
        );
    }
}
export default Family;
