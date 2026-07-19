import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ExerciseList from './components/ExerciseList'

function App() {
  const [workoutCount, setWorkoutCount] = useState(0);

  return (
    <>
      <h1>Workout Tracker</h1>
      <h3>it's been {workoutCount} since first use</h3>
      <p>today: 18.07.2026</p>
      <ExerciseList />
      </>
  )
}

export default App
