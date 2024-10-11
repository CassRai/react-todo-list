export interface ToDoListItem {
    //if you want to make a property optional include a ?
    name:string,
    value?:string,
    done?:boolean
    onDelete: (name: string) => void;
}

export const my_list:ToDoListItem[] = [
    {name:"Wash dishes"},
    {name: "Feed cat"},
    {name:"Homework"},
    {name: "Make dinner"},
    {name: "Join gym"}]

export const new_list:ToDoListItem[] = []