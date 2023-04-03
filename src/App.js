import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Payment from "./pages/Payment";
import Navbar from "./components/Navbar/Navbar";
import Transportation from "./components/Transportation";
// import Navbar  from './components/Navbar';
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/transportation" element={<Transportation />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
