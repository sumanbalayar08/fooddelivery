import "./App.css";
import Home from "./screens/Home";
import Footer from "./Components/Footer";
import SignIn from "./screens/SignIn";
import Navbar from "./Components/Navbar";
import Products from "./screens/Products";
import SignUp from "./screens/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/product' element={<Products/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
