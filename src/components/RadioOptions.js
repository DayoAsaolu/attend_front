import React from 'react';
import './people.css'

const RadioOptions = (props) => (
    <div onChange={props.onChange} style={{float: 'left'}}>
        {props.options.map((option, index) => <div style={{width: 170, marginLeft: 0, marginTop: '4%'}}><input style={{float: 'left'}} type="radio" value={option} name={props.name}/><label>{option}</label></div>)}
    </div>
)

export default RadioOptions