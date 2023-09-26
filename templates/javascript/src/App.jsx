import {useState} from "react"

import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count => count + 1)
  }

  return (
    <div className={styles.box}>
      <div className={styles.state}>
        <span>count: {count}</span>
        <button className={styles.btn} onClick={handleClick}>Click</button>
      </div>

      <div className={styles.words}>
        <p>A template package for building React application by own cli tool.</p>
        <p className={styles.author}> --- Lesenelir</p>
      </div>
    </div>
  )
}

export default App
