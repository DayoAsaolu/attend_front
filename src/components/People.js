import React from 'react'


import './people.css'

class People extends React.Component {

    constructor(props){
      super(props)

      this.state = {
        firstName: "",
        lastName: "",
        value: undefined,
        email: undefined,
        PhoneNo: undefined, 
        location: undefined,
        noOfAdults: undefined,
        noOfChildren: undefined,
        msg: undefined,
        allergy: undefined
      }
    }

    clearForm = (e) => {
        this.setState({firstName: ""});
        this.setState({lastName: ""});
        this.setState({value: ''});
        this.setState({email: ''});
        this.setState({ noOfAdults: ''});
        this.setState({ noOfChildren: ''});
        this.setState({ msg: ''})
        this.setState({ PhoneNo: ''})
        this.setState({ location: ''})
        this.setState({ allergy: ''})
    }

    handleOnSubmit = (e) => {
      e.preventDefault();
      if (this.state.firstName === "" || this.state.lastName === ""){
        alert("Please enter required fields. first and last name required")
      } else {
        this.getUsers(this.state);
      }
      this.clearForm();
      document.getElementById("add-family-form").reset();
    }

    async getUsers(data) {
      data["vaxStatus"] = this.props.vaxStatus;
      fetch('https://registerapp001.herokuapp.com/posts', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => {
        if(this.props.goToZoom){
          alert("Based on your response, please Join with us on zoom. Thank you.")
        } else { 
          alert("Submission Complete");
        }
        })
        .catch(error => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
      }

    alertConfirmation = () => {
      alert("Submission Successful");
    }
    
    handleSelectChange = (e) => {
      this.setState({value: e.target.value});
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

    handleNoOfAdults = (e) => {
      const noOfAdults = e.target.value;
      this.setState({ noOfAdults })
    }

    handleNoOfChildren = (e) => {
      const noOfChildren = e.target.value;
      this.setState({ noOfChildren })
    }

    
    handleallergy = (e) => {
      const allergy = e.target.value;
      this.setState({ allergy })
    }

    handleMsgToBrideGroom = (e) => {
      const msg = e.target.value;
      this.setState({ msg })
    }

    handlePhoneNo = (e) => {
      const PhoneNo = e.target.value;
      this.setState({ PhoneNo })
    }

    handleLocation =  (e) => {
      const location = e.target.value;
      this.setState({ location })
    }

    render(){
        return (
            <div className="People">
                <h3>Register for Lotachi & Nsikak's wedding</h3>
                {/* <h3>Please let us know whether or not you can make it to our wedding.</h3> */}
                <form id="add-family-form">
                    <input type="text" placeholder="First Name" name="fname" onChange={this.handleFirstName} required/> <br />
                    <input type="text" placeholder="Last Name" name="lname" onChange={this.handleLastName} required/> <br />
                    <input type="text" placeholder="Phone Number" name="mail" onChange={this.handlePhoneNo} required/> <br />
                    <input type="text" placeholder="City" name="mail" onChange={this.handleLocation} required/> <br />
                  
                    <input type="text" placeholder="Email Address" name="mail" onChange={this.handleEmailAddress} required/> <br />
                    
                    <input type="text" placeholder="Number of adults" name="noOfAdults" onChange={this.handleNoOfAdults} required/> <br />
                    <input type="text" placeholder="Number of children" name="noOfChildren" onChange={this.handleNoOfChildren} required/> <br />

                    <input type="text" placeholder="Are dietary restrictions?" name="allergy" onChange={this.handleallergy} optional/> <br />

                    <input type="text" placeholder="Message to the Bride and Groom" name="msg" onChange={this.handleMsgToBrideGroom} optional/> <br />



                    
                    <button type="reset" onClick={this.handleOnSubmit}>Register</button>
                </form>
            </div>
        );
    }
}

export default People;
