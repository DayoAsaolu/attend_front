import React from 'react'

import Family from './AddFamily';
import {group, sex, booleanValue} from './Fixtures';
import RadioOptions from './RadioOptions';

import { alert } from 'react-alert-confirm';
import './people.css'

class People extends React.Component {

    constructor(props){
      super(props)

      this.state = {
        firstName: "",
        lastName: "",
        value: undefined,
        gender: undefined,
        firstTime: undefined,
        email: undefined,
        phone: undefined,
        addFamilyMember: false,
        passChild: []
      }
    }

    clearForm = (e) => {
        this.setState({firstName: ""});
        this.setState({lastName: ""});
        this.setState({gender: ''});
        this.setState({value: ''});
        this.setState({email: ''});
    }

    handleOnSubmit = (e) => {
      e.preventDefault();
      if (this.state.firstName === "" || this.state.lastName === ""){
        alert({
          title: "Please enter required fields.",
          okText: "OK"
        })
      } else {
        this.getUsers(this.state);
      }
      this.clearForm();
      document.getElementById("add-family-form").reset();
    }

    async getUsers(data) {
      fetch('https://attendance-dayo.herokuapp.com/posts', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => {
        alert({
          title: "Submission successful",
          okText: "OK"
        })
        })
        .catch(error => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
      }

    alertConfirmation = () => {
      alert({
        title: "Submission successful",
        okText: "OK"
      })
    }
    
    handleSelectChange = (e) => {
      this.setState({value: e.target.value});
    }

    handleSexChange = (e) => {
      this.setState({gender: e.target.value});
    }
  
    handleOthers = (val) => {
      if(val){
        console.log(val)
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

    handleEmailAddress = (e) => {
      const email = e.target.value;
      this.setState({ email });
    }

    handlePhoneNumber = (e) => {
      const phone = e.target.value;
      this.setState({ phone });
    }


    render(){
        return (
            <div className="People">
                <h1>Welcome to the Attendance Page</h1>
                <form id="add-family-form">
                    <input type="text" placeholder="First Name" name="fname" onChange={this.handleFirstName} required/> <br />
                    <input type="text" placeholder="Last Name" name="lname" onChange={this.handleLastName} required/> <br />
                    <div className="Radios">
                      <div className="col">
                        <h4>Group</h4> <br />
                        <RadioOptions onChange={this.handleSelectChange} options={group} name="group" />
                      </div>
                      <div className="col1">
                        <h4>Gender</h4> <br />
                        <RadioOptions onChange={this.handleSexChange} options={sex} name="gender" />
                      </div>
                    </div>
                    <h4>Is today your first time? </h4> <br />
                    <RadioOptions onChange={this.handleComers} options={booleanValue} name="firstTimer" />
                    {this.state.firstTime && 
                      <div>
                        <input type="text" placeholder="Email Address" name="mail" onChange={this.handleEmailAddress} required/> <br />
                        <input type="text" placeholder="Phone number" name="phone" onChange={this.handlePhoneNumber} required/> <br />
                      </div>
                    }
                    <h4>Add Family/Accompanying Members? </h4> <br />
                    <RadioOptions onChange={this.handleAddFamily} options={booleanValue} name="company"/>
                    {this.state.addFamilyMember && <Family passLastName={this.state.lastName} passFamilyMember={this.handleOthers}/>}
                    <button type="reset" onClick={this.handleOnSubmit}>Register</button>
                </form>
            </div>
        );
    }
}

export default People;
