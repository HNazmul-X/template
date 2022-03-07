import { useState } from 'react'
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
