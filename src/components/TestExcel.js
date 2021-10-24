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
        axios.get('http://localhost:9000/posts')
            .then(data => {
                console.log(data);
                this.setState({data: data.data});
            })
    }
    
    render() {
        return (
            <ExcelFile element={<button>Download Data</button>}>
                <ExcelSheet data={this.state.data} name="Attendance">
                    <ExcelColumn label="Date" value="createdAt"/>
                    <ExcelColumn label="First Name" value="firstName"/>
                    <ExcelColumn label="Last name"
                                 value="lastName"/>
                    <ExcelColumn label="Gender" value="gender"/>
                    <ExcelColumn label="Phone" value="phone"/>
                </ExcelSheet>
            </ExcelFile>
        );
    }
}