import { useState } from 'react';
import Header from './layout/Header';
import Checkbox from './layout/Checkbox';
import Footer from './layout/Footer';
import EnterForm from './layout/EnterForm';
import { ToDoListItem } from './data/to-do-list';
import { new_list } from './data/to-do-list';
import './App.css';

export default function App() {
  const [parentState, setParentState] = useState<string>('');

  const handleInput = (newState: string) => {
    setParentState(newState);
    console.log(newState);

    //check if the item exists in new_list
    const isDuplicate = new_list.some((item) => item.name === newState);

    // if does not exist already, add the new item
    if (!isDuplicate) {
      new_list.push({ name: newState });
    } 
  };

  const handleDelete = (name: string) => {
    setNewList(new_list.filter(item => item.name !== name));
  };


  return (
    <> 
      <Header />
      <hr />
      <EnterForm updateParentState={handleInput} />
      <hr />
      <form id="checkboxList" action="">
        {new_list.map(({ name, value }) => (
          <div id="indivCheckbox" key={name}>
            <Checkbox name={name} value={value!} /> 
          </div>
        ))}
      </form> 
      <Footer /> 
    </>
  );
}