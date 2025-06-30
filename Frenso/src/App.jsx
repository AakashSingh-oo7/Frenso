import './App.css'
import HomePage from './components/homepage/HomePage'
import Authentication from './components/authentication/Authentication'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path="/*" element={true?<HomePage />:<Authentication />} />
    </Routes>
    </>
  )
}

export default App
