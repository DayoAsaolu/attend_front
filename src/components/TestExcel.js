import React from "react";
import ReactExport from "react-export-excel";
import axios from 'axios';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


export default class Download extends React.Component {
    constructor(props){
        super();
  
        this.state = {
          data: undefined
        }
    }
    
    componentDidMount() {
        axios.get('https://registerapp001.herokuapp.com/posts')
            .then(data => {
                console.log(data);
                this.setState({data: data.data});
            })
    }
    
    render() {
        return (
            <ExcelFile filename={`${new Date()}`} element={<button>Download Data</button>}>
                <ExcelSheet data={this.state.data} name="Attendance">
                    <ExcelColumn label="Date" value="createdAt"/>
                    <ExcelColumn label="First Name" value="firstName"/>
                    <ExcelColumn label="Last name"value="lastName"/>
                    <ExcelColumn label="email" value="email"/>
                    <ExcelColumn label="noOfAdults" value="noOfAdults"/>
                    <ExcelColumn label="Vaccinated" value="vaxStatus"/>
                    <ExcelColumn label="noOfChildren" value="noOfChildren"/>
                    <ExcelColumn label="allergy" value="allergy"/>
                    <ExcelColumn label="msg" value="msg"/>
                </ExcelSheet>
            </ExcelFile>
        );
    }
}