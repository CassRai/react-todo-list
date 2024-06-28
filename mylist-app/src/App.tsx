//import { useState } from 'react';
//import { Header } from 'layout/header';
import Header from './layout/Header';
import Checkbox from './layout/Checkbox';
import { my_list } from './data/to-do-list';

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  

  return (
    [<Header />,
    my_list.map(()=> (<Checkbox />)) 
    ]


  );
}

export default App
