import React from 'react';
import './people.css'

class Family extends React.Component{
    constructor(props){
        super(props)
  
        this.state = {
          nameText: props.family.fullName,
          gender: props.family.gender,
          relation: props.family.relation,
          group: props.family.group
        }
    }
    
    onNameChange = (e) => {
        const nameText = e.target.value;
        this.setState(() => ({ nameText }));
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

    render(){
        return(
            <div className="option">
                <input type='text' placeholder='Full Name' name='fullName' onChange={this.onNameChange}/> <br />
                <select value={this.state.gender} onSubmit={this.handleSexChange}>
                    <option key="male">Male</option>
                    <option key="female">Female</option>
                    <option key="noAnswer">Prefer Not to Answer</option>
                </select> <br />
                <select value={this.state.relation} onSubmit={this.handleRelationChange}>
                    <option key="son">Son</option>
                    <option key="daughter">Daughter</option>
                    <option key="wife">Wife</option>
                    <option key="husband">Husband</option>
                    <option key="sibling">Sibling</option>
                </select> <br />     
                <select value={this.state.group} onSubmit={this.handleGroupChange}>
                    <option key="children">Children</option>
                    <option key="youth">Youth</option>
                    <option key="campus">Campus</option>
                    <option key="adult">Adult</option>
                </select> <br />
            </div>
        );
    }
}
export default Family;
