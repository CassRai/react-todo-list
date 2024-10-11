/*name & value as arguments for checkbox

: = declaring x as a certain type

`` = good for creating dynamic content

react = based on re-usable components

JSX = html within javascript

*/

import { useEffect, useState } from 'react';


interface CheckboxProps {
    name: string;
    value: string;
    onDelete: (name: string) => void;
}

export default function Checkbox({name, value, onDelete}: CheckboxProps) {
    const IdValue = `checkbox-${value ?? name}`;
    const [isChecked, setIsChecked] = useState(false);

    const checkHandler = () => {
        /*set isChecked to the opposite of what it currently is?
        so if isChecked = true set it to false
        else isChecked = false set it to True
        */
        setIsChecked(!isChecked)
      };


    const deleteHandler = () => {
        onDelete(name);
      };

    return [ 
        <input 
            type="checkbox"
            id={IdValue}
            name={name} 
            value={value}
            checked={isChecked}
            onChange={checkHandler}
            className="customCheckbox"
        />, 
        "   ",
        <label htmlFor={IdValue}
            className= {`${isChecked===true ? 'strikeThroughCheckbox' : ''}`}
        >{name}</label>,
        ,
        <button className='del_button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
         </button>
    ]
}
