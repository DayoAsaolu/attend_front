import React from 'react';
import './people.css'

const SelectOptions = (props) => (    
    <select value={props.value} onChange={props.onChange}>
        <option key="select">Select...</option>
            {props.options.map((option, index) => <option key={option}>{option}</option>)}
    </select>
)

export default SelectOptions