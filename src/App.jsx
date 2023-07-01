import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from './components/nav'
import Home from './pages/home.jsx';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter> 
  )
}


export default App
