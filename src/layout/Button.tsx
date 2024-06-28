export default function Button(){
    function handleClick() {
        alert('You clicked me!');
      }

    return <>
    <div><button type="button" onClick={handleClick}>Add to list</button></div>
    </> 
}