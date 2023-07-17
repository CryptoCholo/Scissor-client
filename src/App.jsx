import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from './components/nav'
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import SignUp from './pages/signup.jsx';
import Dashboard from './pages/coin.jsx';




function App() {
  let token = localStorage.getItem('token')
  const isAuthenticated = token ?  true : false; 

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav isAuthenticated={isAuthenticated}/>}>
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
