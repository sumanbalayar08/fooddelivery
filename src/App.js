import "./App.css";
import Home from "./screens/Home";
import Footer from "./Components/Footer";
import SignIn from "./screens/SignIn";
import Navbar from "./Components/Navbar";
import Products from "./screens/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/product' element={<Products/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
