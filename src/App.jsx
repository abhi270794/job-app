import {useState} from 'react';
import './App.css';
import Login from './components/login'
import data from './data.json'
import {useEffect} from 'react'
import JobBoardComponent from './components/JobBoardComponents'
import {Routes , Route } from 'react-router-dom';

function App() {

  const [jobs,setJobs] = useState([]);

  useEffect(()=> setJobs(data),[]);

  console.log(jobs);
const [text, setText] = useState("")
const handlechange=(e)=>{
   setText(e.target.value);

};

const handleclick=(e)=>{
return(
  <div>
  <h1>{text}</h1>
  </div>
)
};




  return (
    
    
    <div className="App">
   
     <h1>Job listing</h1>
    
     <div className='box'>
     <input type="text" placeholder="add job here" onChange={handlechange}/>
      <button onClick={handleclick}>add</button>
      <div className="company">
      Company
        
      {
        jobs.map((e) => <JobBoardComponent job={jobs} key={jobs.title}/>)
        }
      <div className="client">
      Client
      
      
      
      </div>
    
    
      </div>
    
      </div>
          <Login/>  
    
    </div>
  );
}

export default App;
