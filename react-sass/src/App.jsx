import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import PrimaryRouter from './Router/PrimaryRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <PrimaryRouter />
      </BrowserRouter>
  );
}

export default App
