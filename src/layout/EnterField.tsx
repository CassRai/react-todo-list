export default function EnterField(){

    function handleSubmit(e){
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
    }



    return <>
    <form method="post" onSubmit={handleSubmit}>
    <label>
        Add an activity:  <input name="myInput" />
    </label>
    <div id="button_section"><button type="button">Add to list</button></div>
    </form>
    </>
    
}