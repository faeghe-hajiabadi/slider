import React,{useState} from 'react';
import Thumbnails  from './Thumbnails';
import './App.css';

const items = [1,2,3,4].map(item => ({
  title: `Hello I am Item #${item}`,
  number: `Obviously my number is #${item}`,
}));

function App() {
  const onItemClick = (index)=>{
    setSelected(index);
  }
  const [ selected,setSelected ] = useState();
  
  return (
    <div className="App">

      <Thumbnails inputArray={items} onItemClick={onItemClick} selected={0}/>
    </div>
  );
}

export default App;
