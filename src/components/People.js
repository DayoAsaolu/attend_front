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
        noOfAdults: undefined,
        noOfChildren: undefined,
        msg: undefined,
        // alllegry
      }
    }

    clearForm = (e) => {
        this.setState({firstName: ""});
        this.setState({lastName: ""});
        this.setState({value: ''});
        this.setState({email: ''});
        this.setState({ noOfAdults: ''});
        this.setState({ noOfChildren: ''});
        this.setState({ message: ''})
    }

    handleOnSubmit = (e) => {
      e.preventDefault();
      if (this.state.firstName === "" || this.state.lastName === ""){
        alert("Please enter required fields.")
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
          alert("Based on your response, please worship with us on zoom. Thank you.")
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

    handleMsgToBrideGroom = (e) => {
      const message = e.target.value;
      this.setState({ message })
    }

    render(){
        return (
            <div className="People">
                <h1>Register For Our Wedding?</h1>
                <h3>Please let us know whether or not you can make it to our wedding.</h3>
                <form id="add-family-form">
                    <input type="text" placeholder="First Name" name="fname" onChange={this.handleFirstName} required/> <br />
                    <input type="text" placeholder="Last Name" name="lname" onChange={this.handleLastName} required/> <br />

                  
                    <input type="text" placeholder="Email Address" name="mail" onChange={this.handleEmailAddress} required/> <br />
                    
                    <input type="text" placeholder="Number of adults" name="noOfAdults" onChange={this.handleNoOfAdults} required/> <br />
                    <input type="text" placeholder="Number of children" name="noOfChildren" onChange={this.handleNoOfChildren} required/> <br />

                    <input type="text" placeholder="Message to the Bride and Groom" name="message" onChange={this.handleMsgToBrideGroom} optional/> <br />

                    
                    {/* email, no of adults, childeren, msg to the bride and groom */}


                    
                    <button type="reset" onClick={this.handleOnSubmit}>Register</button>
                </form>
            </div>
        );
    }
}

export default People;
