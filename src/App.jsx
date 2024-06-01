import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Signin from './page/auth/Signin'
import Signup from './page/auth/Signup'
import { HomePage } from './page/homepage/HomePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
