import React from 'react'

import Family from './AddFamily';
import {group, sex, booleanValue} from './Fixtures';
import SelectOptions from './SelectOptions';
import RadioOptions from './RadioOptions';

import './people.css'

class People extends React.Component {

    constructor(props){
      super(props)

      this.state = {
        firstName: undefined,
        lastName: undefined,
        value: undefined,
        gender: undefined,
        firstTime: undefined,
        addFamilyMember: false,
        passChild: []
      }
    }


    handleClickSignUp = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleSelectChange = (e) => {
      this.setState({value: e.target.value});
    }

    handleSexChange = (e) => {
      this.setState({gender: e.target.value});
    }
  
    handleOthers = (val) => {
      if(val){
        this.setState(prevState => ({
          passChild: [...prevState.passChild, val]
        }))
      }
    }

    handleAddFamily = (e) => {
      const familyValue = e.target.value === "Yes" ? true : false;
      this.setState({addFamilyMember: familyValue});
    }

    handleComers = (e) => {
      const timeValue = e.target.value === "Yes" ? true : false;
      this.setState({firstTime: timeValue});
    }

    handleFirstName = (e) => {
      const firstName = e.target.value;
      this.setState({ firstName });
    }

    handleLastName = (e) => {
      const lastName = e.target.value;
      this.setState({ lastName });
    }

    render(){
        return (
            <div className="People">
                <h1>Welcome to the Attendance Page</h1>
                <form onSubmit={this.handleClickSignUp}>
                    <input type="text" placeholder="First Name" name="fname" onChange={this.handleFirstName} required/> <br />
                    <input type="text" placeholder="Last Name" name="lname" onChange={this.handleLastName} required/> <br />
                    <h4>Group</h4> <br />
                    <RadioOptions onChange={this.handleSelectChange} options={group} />
                    <h4>Gender</h4> <br />
                    <RadioOptions onChange={this.handleSexChange} options={sex} />
                    <h4>Is today your first time? </h4> <br />
                    <RadioOptions onChange={this.handleComers} options={booleanValue} />
                    <h4>Add Family/Accompanying Members? </h4> <br />
                    <RadioOptions onChange={this.handleAddFamily} options={booleanValue} />
                    {this.state.addFamilyMember && <Family passFamilyMember={this.handleOthers}/>}
                    <button>Register</button>
                </form>
            </div>
        );
    }
}

export default People;
