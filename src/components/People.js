import React from "react";

import {group, sex, booleanValue} from './Fixtures';
import RadioOptions from './RadioOptions';
import Family from './AddFamily';

import { db } from "../firebase.js";

import './people.css'

class People extends React.Component {

    constructor(props){
      super(props)

      this.state = {
        firstName: "",
        lastName: "",
        value: "",
        gender: "",
        firstTime: "",
        email: "",
        phone: "",
        addFamilyMember: [],
        currentFamilyCount: 0,
        passChild: []
      }
    }

    clearForm = (e) => {
        this.setState({firstName: ""});
        this.setState({lastName: ""});
        this.setState({gender: ''});
        this.setState({value: ''});
        this.setState({email: ''});
        this.setState({phone: ''});
        this.setState({currentFamilyCount: 0});
    }

    handleOnSubmit = (e) => {
      e.preventDefault();
      if (this.state.firstName === "" || this.state.lastName === ""){
        alert("Please enter required fields.")
      } else {
        const data = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          sex: this.state.gender,
          email: this.state.email,
          phone: this.state.phone,
          firstTime: this.state.firstTime,
          family: this.state.passChild,
          created: new Date() 
        }

        var d = new Date();
        var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear()    
        db.collection("attendance")
          .doc(datestring)
          .collection("people")
          .doc(this.state.lastName)
          .set(data)
          .then(() => {
            alert(`Registered ${this.state.firstName} ${this.state.lastName}`)
          })
      }

      this.clearForm();
      document.getElementById("add-family-form").reset();
    }

    alertConfirmation = () => {
      alert("Submission Successful");
    }
    
    handleSelectChange = (e) => {
      this.setState({value: e.target.value});
    }

    handleSexChange = (e) => {
      this.setState({gender: e.target.value});
    }
  
    handleOthers = (val) => {
      if(val){
        const data = [...this.state.passChild]
        data.push(val)
        this.setState({passChild: data}, () => {
          console.log(this.state.passChild)
        })
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
    
    handleFamilyCount = (e) => {
      this.setState({ addFamilyMember: this.state.addFamilyMember
        .concat(<Family passLastName={this.state.lastName} passFamilyMember={this.handleOthers}></Family>)})
    }

    render(){
        return (
            <div className="People">
                <h1>Welcome to the Attendance Page</h1>
                <form id="add-family-form">
                    <input type="text" placeholder="First Name" name="fname" onChange={this.handleFirstName} required/> <br />
                    <input type="text" placeholder="Last Name" name="lname" onChange={this.handleLastName} required/> <br />
                    <input type="text" placeholder="Phone number" name="phone" onChange={this.handlePhoneNumber} required/> <br />
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
                      </div>
                    }
                    <h4>Add Family/Accompanying Members? </h4> 
                    <button onClick={this.handleFamilyCount} className="addFamily">Add Family</button>
                    {this.state.addFamilyMember}
                    <button className='submitButton' type="reset" onClick={this.handleOnSubmit}>Register</button>
                </form>
            </div>
        );
    }
}

export default People;
