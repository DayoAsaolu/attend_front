import React from "react";

import {group, sex, booleanValue} from './Fixtures';
import RadioOptions from './RadioOptions';
import Family from './AddFamily';

import { db } from "../firebase.js";
import logo from '../assets/logo.jpg'
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
        address: "",
        postalCode: "",
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
        this.setState({address: ''})
        this.setState({postalCode: ''})
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
          address: this.state.address,
          postalCode: this.state.postalCode,
          phone: this.state.phone,
          firstTime: this.state.firstTime,
          family: this.state.passChild
        }

        var d = new Date();
        var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear()    
        db.collection("attendance")
          .doc(datestring)
          .collection("people")
          .doc(this.state.lastName)
          .set(data)
          .then(() => {
            alert(`Registered ${data.firstName} ${data.lastName}`)
          })
      }

      this.clearForm();
      //document.getElementById("add-family-form").reset();
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

    handleStreetAddress = (e) => {
      const address = e.target.value;
      this.setState({ address });
    }

    handlePostalCode = (e) => {
      const postalCode = e.target.value;
      this.setState({ postalCode });
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
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <img src={logo} style={{width: 120, height: 120, paddingLeft: '2%'}} className="logoL" alt="Logo"/>
                  <div style={{display: 'flex', flexDirection: 'column', marginLeft: 'auto', marginRight: 'auto'}}>
                    <h1 style={{marginBottom: 0}}>Deeper Life Bible Church Attendance Page</h1>
                    <h3 style={{marginLeft: 'auto', marginRight: 'auto'}}>10694 City Pkwy, Surrey, BC V3T 4C7</h3>
                  </div>
                </div>
                <form className="add-family-form">
                    <input type="text" placeholder="First Name" name="fname" onChange={this.handleFirstName} required/> <br />
                    <input type="text" placeholder="Last Name" name="lname" onChange={this.handleLastName} required/> <br />
                    <input type="text" placeholder="Phone number" name="phone" onChange={this.handlePhoneNumber} required/> <br />
                    <div className="Radios">
                      <div style={{marginLeft: '13%', width: 250}}>
                        <h4 style={{marginBottom: 0}}>Group</h4> <br />
                        <RadioOptions onChange={this.handleSelectChange} options={group} name="group" />
                      </div>
                      <div style={{marginLeft: '13%', width: 250}}>
                        <h4 style={{marginBottom: 0}}>Gender</h4> <br />
                        <RadioOptions onChange={this.handleSexChange} options={sex} name="gender" />
                      </div>
                    </div>
                    <div className="timerHolder">
                      <div style={{marginLeft: '13%', marginBottom: 0}}>
                        <h4>Is today your first time? </h4> <br />
                        <div style={{marginLeft: '23%', marginBottom: 0}}>
                          <RadioOptions onChange={this.handleComers} options={booleanValue} name="firstTimer" />
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div style={{width: '100%',marginLeft: '13%'}}>
                        {this.state.firstTime && 
                          <div style={{width: '70%'}}>
                            <h4>Please enter the following information. </h4> <br />
                            <input type="text" placeholder="Email Address" name="mail" onChange={this.handleEmailAddress} required/> <br />
                            <input type="text" placeholder="Street Address" name="address" onChange={this.handleStreetAddress} required/> <br />
                            <input type="text" placeholder="Postal Code" name="postal" onChange={this.handlePostalCode} required/> <br />
                          </div>
                        } 
                    </div>                    
                    <br />
                    <br />
                    <div style={{width: '70%', marginTop: '4%', marginLeft: '8%'}}>
                        <h4>Add Family/Accompanying Members? </h4> 
                        <button onClick={this.handleFamilyCount} className="addFamily">Add Family</button>
                    </div>
                    <div style={{width: '100%'}}>
                          {this.state.addFamilyMember}
                    </div>
                    <button style={{marginTop: '4%'}} className='submitButton' type="reset" onClick={this.handleOnSubmit}>Register</button>
                </form>
            </div>
        );
    }
}

export default People;
