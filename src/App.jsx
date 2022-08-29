import Home from "./pages/home/Home";
import "./app.scss"
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/watch" element={<Watch/>}></Route> 
        <Route path="/login" element={<Login/>}></Route> 
        <Route path="/register" element={<Register/>}></Route> 
      </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;