import { useEffect, useState } from 'react';
import Header from './layout/Header';
import Checkbox from './layout/Checkbox';
// import { my_list } from './data/to-do-list'
import Footer from './layout/Footer';
import EnterForm from './layout/EnterForm';
import { ToDoListItem } from './data/to-do-list';
import { new_list } from './data/to-do-list';
// import { submitForm } from './layout/EnterForm';
import  './App.css'


export default function App() {
  const [parentState, setparentState] = useState<string>('');

  const handleInput = (newState: string) =>{
    setparentState(newState);
    console.log(newState);
    new_list.push({name:newState})
  }

  /*useEffect(() => {
    console.log(parentState);
  }, [parentState]) */

  //new_list.push({name:parentState}) 



  //prop = properties/attributes

  return (
    // <> </> = fragment - an array alternative 
    <> 
      <Header />
      <hr></hr>
      <EnterForm updateParentState={handleInput} />
      <hr></hr>
      <form id="checkboxList" action="">
        {/** {} within here to show an object and that its not html */}
        {new_list.map(({name, value}) => ( 
          <div id="indivCheckbox"> 
            <Checkbox key={name+value} name={name} value={value!}/> 
          </div>)) }
      </form> 
      <Footer /> 
    </>
  );
}

