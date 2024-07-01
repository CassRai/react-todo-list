export default function EnterForm(){

    function handleSubmit(e){
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const list_activity = formData.get("user_activity");

        alert('You clicked me!' + {list_activity});
    }



    return <>
    <form method="post" onSubmit={handleSubmit}>
    <label>
        Add an activity:  <input name="user_activity" />
    </label>
   
    <div id="button_section"><button type="submit">Add to list</button></div>
    </form>
    </>
    
}