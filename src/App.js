
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Login from './pages/login/login';
import Register from './pages/register/register';
import Home from "./pages/Home/Home";
import CreatePost from "./components/createPost/CreatePost";





const App = () => {



  return (
 
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path ="/Home" element ={<Home/>}>
           
          </Route>
          
        
        </Routes>
      </BrowserRouter>

  

  )
}

export default App