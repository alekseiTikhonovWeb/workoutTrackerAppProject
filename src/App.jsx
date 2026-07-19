import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddSetForm from './components/AddSetForm'
import SetList from './components/SetList'

function App() {
  const [sets, setSets] = useState([]);

  const data = [{ id: 1, date: "2026-07-06", exercise: "Lat Pulldown", muscle: "back", weight: 60, reps: 10 },
  { id: 2, date: "2026-07-06", exercise: "Lat Pulldown", muscle: "back", weight: 65, reps: 8 },
  { id: 3, date: "2026-07-06", exercise: "Overhead Press", muscle: "shoulders", weight: 40, reps: 8 },
  { id: 4, date: "2026-07-08", exercise: "Bench Press", muscle: "chest", weight: 80, reps: 5 },
  { id: 5, date: "2026-07-08", exercise: "Bench Press", muscle: "chest", weight: 85, reps: 3 },
  { id: 6, date: "2026-07-08", exercise: "Lateral Raise", muscle: "shoulders", weight: 10, reps: 15 },
  { id: 7, date: "2026-07-10", exercise: "Barbell Row", muscle: "back", weight: 70, reps: 8 },
  { id: 8, date: "2026-07-10", exercise: "Lat Pulldown", muscle: "back", weight: 65, reps: 9 },
  { id: 9, date: "2026-07-11", exercise: "Squat", muscle: "legs", weight: 100, reps: 5 },
  { id: 10, date: "2026-07-11", exercise: "Romanian Deadlift", muscle: "legs", weight: 90, reps: 8 },];

  function addSet(newSet) {    
            
    setSets([...sets, newSet]);

  }

  function fetchSets() {
    return new Promise(resolve => setTimeout(() => resolve(data), 300));
  }

  useEffect(() => {
      fetchSets().then(data => setSets(data));  
    },[]);


  return (
    <>
      <h1>Workout Tracker</h1>
    {sets.length === 0
      ? <p>Loading...</p>
      : <SetList sets={sets} />}
    <AddSetForm onAdd={addSet} />
      </>
  )
}

export default App
