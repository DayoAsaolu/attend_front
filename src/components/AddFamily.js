import React from 'react';

import {group, sex, relation} from './Fixtures';
import SelectOptions from './SelectOptions';

import './people.css'

class Family extends React.Component{
    constructor(props){
        super(props)
  
        this.state = {
          nameText: undefined,
          gender: undefined,
          relation: undefined,
          group: undefined
        }
    }
    
    onNameChange = (e) => {
        const nameText = e.target.value;
        this.setState(() => ({ nameText }));
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

    clearForm = () => {
        this.setState(() => ({nameText: ''}));
        this.setState(() => ({gender: ''}));
        this.setState(() => ({relation: ''}));
        this.setState(() => ({group: ''}));
    }

    onSubmit = (e) => {
        e.preventDefault();
        const family = {
            nameText: this.state.nameText,
            gender: this.state.gender,
            relation: this.state.relation,
            group: this.state.group
        };
        this.props.passFamilyMember(family)
        this.clearForm()
    }

    render(){
        return(
            <div className="option">
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='Full Name' name='fullName' onChange={this.onNameChange}/> <br />
                    <div>Gender</div>
                    <SelectOptions value={this.state.gender} onChange={this.handleSexChange} options={group}/><br />
                    <div>Relationship</div> 
                    <SelectOptions value={this.state.relation} onChange={this.handleRelationChange} options={relation} /><br/> 
                    <div>Group</div>   
                    <SelectOptions value={this.state.group} onChange={this.handleGroupChange} options={sex} /><br />
                    <button type='reset'>Add Family</button>
                </form>
            </div> 
        );
    }
}
export default Family;
