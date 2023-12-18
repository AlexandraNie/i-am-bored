import { useState } from 'react';
import './App.css';
import video from './boring.mp4';



function App() {

  const[myActivity, setMyActivity] = useState("");
  
  
 
    const getActivity = async() => {
      const response = await fetch(`http://www.boredapi.com/api/activity/`);
      const data = await response.json();
      console.log (data.activity);
      setMyActivity(data.activity)
    }
    

  
 
  

  return (
    <div className="App">

    <div className='container'>
    <video autoPlay muted loop>
      <source src={video} type="video/mp4"/>
    </video>
    <h1>Are you bored? Click here! Here are a few ideas for you! </h1>
    </div>

    <div className='container'>
    <button onClick={getActivity}>
    <img src="https://img.icons8.com/?size=48&id=63261&format=png" alt="icon"/>
    </button>
    </div>

    <div className='container'>
    <p className='response'>{myActivity}</p>
    </div>
    
    </div>
  );
}

export default App;
