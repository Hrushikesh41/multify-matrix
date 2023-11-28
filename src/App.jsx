import { useState } from 'react'
import './App.css'
import Matrix from './pages/Matrix/Matrix'
import DoubleMatrix from './pages/newMatrix/DoubleMatrix'
import TripleMatrix from './pages/TripleMatrix/TripleMatrix'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
         
          <Route exact path='/' element={<Matrix />} />
          <Route exact path='/2X3' element={<DoubleMatrix />} />
          <Route exact path='/3X3' element={<TripleMatrix />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
