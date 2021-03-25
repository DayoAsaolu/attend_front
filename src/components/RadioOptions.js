import React from 'react';
import './people.css'

const RadioOptions = (props) => (
    <div onChange={props.onChange}>
        {props.options.map((option, index) => <div><input type="radio" value={option} name={props.name}/><label>{option}</label></div>)}
    </div>
)

export default RadioOptions