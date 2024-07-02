import { SetStateAction, useState } from "react";

// export function submitForm(answer:string){
//     return answer
// }

export default function EnterForm({ updateParentState }) {

    const[newInput, setNewInput] = useState("");


    const handleOnChange = (e: SetStateAction<string>) =>{
        setNewInput(e.target.value)
        console.log(e.target.value)
    }
    
    const handleNewInput= () =>{
        updateParentState(newInput)
    }


    // function handleSubmit(e){
    //     // Prevent the browser from reloading the page
    //     e.preventDefault();

    //     // Read the form data
    //     const form = e.target;
    //     const formData = new FormData(form);
    //     const list_activity = formData.get("user_activity");

    //     alert('You clicked me!' + ` ${list_activity}`);

    //     try {
    //         submitForm(list_activity);
    //         alert(list_activity);

    //     } catch {
    //         alert('Enter an activity');
    //     }
    // }

    {/* <form method="post" onSubmit={handleSubmit}> */}
    {/* </form> */}


    return (
    <>
        <label>
            Add an activity:  <input name="user_activity" onChange={handleOnChange}/>
        </label>
    
        <div id="button_section"><button onClick={handleNewInput}>Add to list</button></div>
    </>
    )
}
