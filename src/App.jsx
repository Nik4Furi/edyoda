import React  from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

//Component
import Navbar from './components/Navbar'

//Pages
import Home from './pages/Home'
import Error from './pages/Error'
import Footer from './components/Footer'


function App() {

  return (
   <>
       <BrowserRouter >
        {/* Navbar Component  */}
        <Navbar />

        <Routes >

          {/* Home Page  */}
          <Route path='/' element={<Home />} ></Route>
          <Route path='*' element={<Error />} ></Route>

        </Routes>

        {/* Footer Component  */}
        <Footer />
        
      </BrowserRouter>
   </>
  )
}

export default App
