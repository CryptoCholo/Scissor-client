import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from './components/nav'
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import SignUp from './pages/signup.jsx';
import Dashboard from './pages/coin.jsx';




function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav/>}>
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/history" element={<Dashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter> 
  )
}


export default App
