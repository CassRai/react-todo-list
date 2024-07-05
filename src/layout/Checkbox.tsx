/*name & value as arguments for checkbox

: = declaring x as a certain type

`` = good for creating dynamic content

react = based on re-usable components

JSX = html within javascript

*/

import { useEffect, useState } from 'react';

export default function Checkbox({name, value}:{name:string, value?:string}){
    const IdValue = `checkbox-${value ?? name}`;
    const [isChecked, setIsChecked] = useState(false);

    const checkHandler = () => {
        /*set isChecked to the opposite of what it currently is?
        so if isChecked = true set it to false
        else isChecked = false set it to True
        */
        setIsChecked(!isChecked)

        
      }

    return [ 
        <input 
            type="checkbox"
            id={IdValue}
            name={name} 
            value={value}
            checked={isChecked}
            onChange={checkHandler}
        />, 
        "   ",
        <label htmlFor={IdValue}
            className= {`${isChecked===true ? 'strikeThroughCheckbox' : ''}`}
        >{name}</label>
    ]
}
