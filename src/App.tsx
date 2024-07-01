import { useState } from 'react';
import Header from './layout/Header';
import Checkbox from './layout/Checkbox';
import { my_list } from './data/to-do-list';
import Footer from './layout/Footer';
import EnterForm from './layout/EnterForm';
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  //prop = properties/attributes

  

  return (
    // <> </> = fragment - an array alternative 
    <> 
    <Header />
    <hr></hr>
    <EnterForm />
    <hr></hr>
    <form id="checkboxList" action="">
      {/** {} within here to show an object and that its not html */}
      {my_list.map(({name, value}) => ( <div id="indivCheckbox"> <Checkbox key={name+value} name={name} value={value!}/> </div>)) }
    </form> 
    <Footer /> 
    </>
  );
}

export default App
