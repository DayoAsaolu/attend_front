import React from 'react';
import './people.css'

const Family = (props) =>
 (
    <div className="option">
        <input type='text' placeholder='Full Name' /> <br />
        <select >
            <option key="male">Male</option>
            <option key="female">Female</option>
            <option key="noAnswer">Prefer Not to Answer</option>
        </select> <br />
        <select >
            <option key="son">Son</option>
            <option key="daughter">Daughter</option>
            <option key="wife">Wife</option>
            <option key="husband">Husband</option>
            <option key="sibling">Sibling</option>
        </select> <br />     
        <select >
            <option key="children">Children</option>
            <option key="youth">Youth</option>
            <option key="campus">Campus</option>
            <option key="adult">Adult</option>
        </select> <br />
    </div>
    );

export default Family;
