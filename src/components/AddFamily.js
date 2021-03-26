import React from 'react';

import {group, sex, relation} from './Fixtures';
import RadioOptions from './RadioOptions';

import './people.css'

class Family extends React.Component{
    constructor(props){
        super(props)
  
        this.state = {
          familyFirstName: undefined,
          familyLastName: undefined,
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
        console.log(e.target.value)
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

    onSubmit = (e) => {
        //e.preventDefault();
        const family = {
            familyFirstName: this.state.familyFirstName,
            familyLastName: this.state.familyLastName,
            gender: this.state.gender,
            relation: this.state.relation,
            group: this.state.group
        };
        this.props.passFamilyMember(family);
    }

    render(){
        return(
            <div className="option">
                <form>
                    <input type='text' placeholder='First Name' name='firstName' onChange={this.onfirstNameChange} required/> <br />
                    <input type="text" placeholder="Last Name" name="lastName" onChange={this.onlastNameChange} required/> <br />
                    <div className="Radios">
                        <div className="col">
                            <div>Gender</div>
                            <RadioOptions onChange={this.handleSexChange} options={sex} name="gender"/><br />
                        </div>
                        <div className="col1">
                            <div>Relationship</div> 
                            <RadioOptions onChange={this.handleRelationChange} options={relation} name="relation"/><br/> 
                        </div>
                        <div className="col2">
                            <div>Group</div>   
                            <RadioOptions onChange={this.handleGroupChange} options={group} name="group"/><br />
                        </div>
                    </div>
                    <button type="reset" onClick={this.onSubmit}>Add Family</button>
                </form>
            </div> 
        );
    }
}
export default Family;
