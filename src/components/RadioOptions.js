import React from 'react';
import './people.css'

const RadioOptions = (props) => (
    <div onChange={props.onChange}>
        {props.options.map((option) => <div><input type="radio" value={option} name={option}/><label>{option}</label></div>)}
    </div>
)

export default RadioOptions