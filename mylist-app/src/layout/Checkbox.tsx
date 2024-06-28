//name & value as arguments for checkbox

//: = declaring x as a certain type

export default function Checkbox(name:string, value?:string, done?:boolean){
    const IdValue = `checkbox-${value ?? name}`;

    return [ 
        <input type="checkbox" id={IdValue} name={name} value={value} checked={!!done}/>,
        <label htmlFor={IdValue}>{name}</label>
    ]
}
