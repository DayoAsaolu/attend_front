import React from 'react'
import Family from './AddFamily'
import './people.css'

class People extends React.Component {

    constructor(props){
      super(props)

      this.state = {
        display: 'block',
        value: 'Children',
        children: [],
        passChild: []
      }
    }
    /**
    async getUsers(name, password) {
        // With error handling
        let body = {
          'user': name,
          'pass': password
        };
        fetch("http://127.0.0.1:5000/auth", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data['name']);
          this.props.passName(data['name'])
          data['message'] === 200 ? this.props.history.push('/welcome') : this.setState(() => ({error: !this.state.error}))
        })
          .catch(error => {
            console.error(
              "There has been a problem with your fetch operation:",
              error
            );
          });
    }
    **/

    handleClickSignUp = (e) => {
        e.preventDefault();
        console.log(e.target.elements)
        const firstName = e.target.elements.fname.value.trim();
        const lastName = e.target.elements.lname.value.trim();
        const group = this.state.value;
        //this.getUsers(name, password);
        Array.prototype.forEach.call(e.target.elements, (element) => {
          console.log(element.value);
        })
    }

    handleSelectChange = (e) => {
      this.setState({value: e.target.value});
    }

    handleReturnedFamily = (value) => {
      alert(value);
      if(value){
        alert(value);
      }
    }

    handleShowFamily = () => {
      this.setState({children: [...this.state.children,<Family family={this.handleReturnedFamily}/>]
      });
    }

    render(){
        return (
            <div className="People" style={{display: this.state.display }}>
                <form onSubmit={this.handleClickSignUp}>
                    <input type="text" placeholder="First Name" name="fname" required/> <br />
                    <input type="text" placeholder="Last Name" name="lname" required/> <br />
                    <select value={this.state.value} onChange={this.handleSelectChange}>
                        <option key="children">Children</option>
                        <option key="youth">Youth</option>
                        <option key="campus">Campus</option>
                        <option key="adult">Adult</option>
                    </select> <br />
                    <h3>Family/Accompanying Members</h3>
                    <div className="AddFamily" onClick={this.handleShowFamily}> + ADD FAMILY MEMBER</div>
                    {this.state.children.map(child => child)}
                    <button>Register</button>
                </form>
            </div>
        );
    }
}

export default People;
