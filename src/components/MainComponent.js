import React from 'react';

import People from './People';
import Questions from './Questionnaire'

class Main extends React.Component{
    constructor(props){
        super(props)
  
        this.state = {
          show1: true,
          show2: false
        }
    }
    

    handleQuestions = (value) => {
        if(value){
            this.setState({show1 : false});
            this.setState({show2: true})
        }
    }
    render(){
        return(
            <div>
                {this.state.show1 && <Questions showForm={this.handleQuestions}/>}
                {this.state.show2 && <People />}
            </div>
        )
    }
}
export default Main;