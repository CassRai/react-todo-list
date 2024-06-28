//import { useState } from 'react';
//import { Header } from 'layout/header';
import Header from './layout/Header';
import Checkbox from './layout/Checkbox';
import { my_list } from './data/to-do-list';

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  //prop = properties/attributes

  

  return (
    [<Header />,
    <form action="">
      {/** {} within here to show an object and that its not html */}
      {my_list.map(({name, value, done}) => (<Checkbox key={name+value} name={name} value={value!} done={done} />)) }
    </form>
    ]


  );
}

export default App
