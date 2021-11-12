import React from 'react';

import People from './People';
import Questions from './Questionnaire'

class Main extends React.Component{
    constructor(props){
        super();
  
        this.state = {
          show1: true,
          show2: false,
          sendToZoom: false,
          vaxStatus: undefined
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

    vaxQ = (value) => {
        if(value){
            this.setState({vaxStatus : value})
        }
    }

    render(){
        return(
            <div>
                {this.state.show1 && <Questions showForm={this.handleQuestions} toZoom={this.handleYesCase} getVaccineData={this.vaxQ}/>}
                {this.state.show2 && <People goToZoom={this.state.sendToZoom} vaxStatus={this.state.vaxStatus}/>}
                
            </div>
        )
    }
}
export default Main;