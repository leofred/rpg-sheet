// import { useState } from 'react'
import rpgImage from './assets/file.jpeg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#">
          <img src={rpgImage} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>RPG Sheet</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Aqui vai rolar a putaria
        </p>
      </div>
      <p className="read-the-docs">
        Viva o culto do sapo!
      </p>
    </>
  )
}

export default App