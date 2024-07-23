import { useState } from 'react'
import HeaderPage from './components/header'
import ContainerBody from './components/container'
/*import './App.css'*/
import './styles/general_styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="box">
      <HeaderPage/>
      <ContainerBody/>
    </div>
  )
}

export default App
