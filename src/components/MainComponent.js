import React from 'react';

import People from './People';
import Questions from './Questionnaire'

class Main extends React.Component{
    constructor(props){
        super();
  
        this.state = {
          show1: true,
          show2: false,
          sendToZoom: false
        }
    }
    

    handleQuestions = (value) => {
        if(value){
            this.setState({show1 : false});
            this.setState({show2: true})
        }
    }

    handleYesCase = (value) => {
        if(value){
            this.setState({sendToZoom : true});
        }
    }

    render(){
        return(
            <div>
                {this.state.show1 && <Questions showForm={this.handleQuestions} toZoom={this.handleYesCase}/>}
                {this.state.show2 && <People goToZoom={this.state.sendToZoom}/>}
                
            </div>
        )
    }
}
export default Main;