import { Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {

  return (
    <Routes>
      <Route path='*' element={<Dashboard />} />
    </Routes>
  )
}

export default App
