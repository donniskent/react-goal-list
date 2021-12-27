import logo from './logo.svg';
import './App.css';
import Goals from "./Components/Goals/Goals";
import NewGoal from './Components/NewGoals/NewGoal';
import {useState} from 'react';
//in a production environment, the dummy goals wouldnt exist. Instead, data would be loaded by the backend 
const DUMMY_GOALS = [
  { id: 'e1',
    message: 'Learn React',
    date: new Date(2021,12,27),
  },
  { id: 'e2',
    message: 'Learn Django',
    date: new Date(2021,12,28),
  },

];



function App() {
  const [goals, setGoals] = useState(DUMMY_GOALS);
  
 const addGoalHandler = (goal) => {
    setGoals(previousGoals => {
      return [goal, ...previousGoals]; });
  }
  
  
  
  return (
    <div>
    <NewGoal onAddGoal={addGoalHandler}/>
    
    <Goals items={goals}/>
  
  </div>
  );
}

export default App;
