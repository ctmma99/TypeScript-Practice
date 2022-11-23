import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}

const LikeButton = () => {
  const [count,setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <>
      <span className='LikeButton' onClick={handleClick}>♡{count}</span>
    </>
  );
}

export default App;
