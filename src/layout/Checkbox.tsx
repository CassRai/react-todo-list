/*name & value as arguments for checkbox

: = declaring x as a certain type

`` = good for creating dynamic content

react = based on re-usable components

JSX = html within javascript

*/

export default function Checkbox({name, value}:{name:string, value?:string}){
    const IdValue = `checkbox-${value ?? name}`;

    return [ 
        <input type="checkbox" id={IdValue} name={name} value={value}/>, 
        "   ",
        <label htmlFor={IdValue}>{name}</label>
    ]
}
