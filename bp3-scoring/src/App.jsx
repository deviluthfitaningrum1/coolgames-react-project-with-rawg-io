import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src="https://ukpppg.bppp.kemdikbud.go.id/peserta/assets/images/logo-menteri.svg" class="h-2rem md:h-4rem" alt=" " />
        
      </div>
      <h1>SCORING</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
